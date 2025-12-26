"use client"

import remarkGfm from "remark-gfm"
import { Streamdown } from "streamdown"
import { InlineCta } from "@/components/insights/inline-cta"

interface MarkdownContentProps {
  content: string
  className?: string
}

const baseClass = "prose prose-slate max-w-none dark:prose-invert"

const CTA_MARKER = "<!-- CTA:insight -->"

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  const mergedClassName = className ? `${baseClass} ${className}` : baseClass

  // 检测并处理 CTA 标记
  const ctaIndex = content.indexOf(CTA_MARKER)

  if (ctaIndex === -1) {
    // 没有 CTA 标记，直接渲染
    return (
      <Streamdown remarkPlugins={[remarkGfm]} className={mergedClassName}>
        {content}
      </Streamdown>
    )
  }

  // 分割内容为前后两部分
  const beforeCta = content.slice(0, ctaIndex).trim()
  const afterCta = content.slice(ctaIndex + CTA_MARKER.length).trim()

  return (
    <>
      {beforeCta && (
        <Streamdown remarkPlugins={[remarkGfm]} className={mergedClassName}>
          {beforeCta}
        </Streamdown>
      )}
      <InlineCta />
      {afterCta && (
        <Streamdown remarkPlugins={[remarkGfm]} className={mergedClassName}>
          {afterCta}
        </Streamdown>
      )}
    </>
  )
}
