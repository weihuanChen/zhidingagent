"use client"

import remarkGfm from "remark-gfm"
import { Streamdown } from "streamdown"

interface MarkdownContentProps {
  content: string
  className?: string
}

const baseClass = "prose prose-slate max-w-none dark:prose-invert"

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  const mergedClassName = className ? `${baseClass} ${className}` : baseClass

  return (
    <Streamdown remarkPlugins={[remarkGfm]} className={mergedClassName}>
      {content}
    </Streamdown>
  )
}
