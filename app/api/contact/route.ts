import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// 创建 SMTP 传输器
const createTransporter = () => {
  // 如果配置了 SMTP，使用 SMTP
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }
  
  // 如果没有配置 SMTP，返回 null（将导致错误）
  return null
}

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      industry,
      website,
      websiteStatus,
      challenge,
      timeframe,
      preferredMode,
      other,
    } = body

    // 验证必填字段
    if (!name || !email || !industry || !websiteStatus || !challenge || !timeframe || !preferredMode) {
      return NextResponse.json(
        { error: "请填写所有必填字段" },
        { status: 400 }
      )
    }

    // 构建邮件内容
    const emailContent = `
新的合作咨询提交

基本信息：
- 姓名：${name}
- 邮箱：${email}
- 行业：${industry}
- 网站：${website || "未提供"}

网站状态：${getWebsiteStatusLabel(websiteStatus)}

核心问题：
${challenge}

预期时间框架：${getTimeframeLabel(timeframe)}

首选合作模式：${getPreferredModeLabel(preferredMode)}

${other ? `其他信息：\n${other}` : ""}

---
提交时间：${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}
    `.trim()

    // 创建邮件传输器
    const transporter = createTransporter()
    
    if (!transporter) {
      console.error("[contact-api] SMTP not configured")
      return NextResponse.json(
        { error: "邮件服务未配置，请联系管理员" },
        { status: 500 }
      )
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2563eb;">新的合作咨询提交</h2>
        
        <h3 style="color: #1e40af; margin-top: 20px;">基本信息</h3>
        <ul>
          <li><strong>姓名：</strong>${name}</li>
          <li><strong>邮箱：</strong><a href="mailto:${email}">${email}</a></li>
          <li><strong>行业：</strong>${industry}</li>
          <li><strong>网站：</strong>${website ? `<a href="${website}" target="_blank">${website}</a>` : "未提供"}</li>
        </ul>

        <h3 style="color: #1e40af; margin-top: 20px;">网站状态</h3>
        <p>${getWebsiteStatusLabel(websiteStatus)}</p>

        <h3 style="color: #1e40af; margin-top: 20px;">核心问题</h3>
        <p style="background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${challenge}</p>

        <h3 style="color: #1e40af; margin-top: 20px;">预期时间框架</h3>
        <p>${getTimeframeLabel(timeframe)}</p>

        <h3 style="color: #1e40af; margin-top: 20px;">首选合作模式</h3>
        <p>${getPreferredModeLabel(preferredMode)}</p>

        ${other ? `
        <h3 style="color: #1e40af; margin-top: 20px;">其他信息</h3>
        <p style="background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${other}</p>
        ` : ""}

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 12px;">
          提交时间：${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}
        </p>
      </div>
    `

    // 发送邮件
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "contact@zhidingagent.com",
      replyTo: email,
      subject: `新的合作咨询 - ${name} (${industry})`,
      text: emailContent,
      html: htmlContent,
    }

    try {
      const info = await transporter.sendMail(mailOptions)
      console.log("[contact-api] Email sent:", info.messageId)

      return NextResponse.json(
        { 
          success: true, 
          message: "咨询已提交，我们会尽快与您联系",
          messageId: info.messageId
        },
        { status: 200 }
      )
    } catch (error) {
      console.error("[contact-api] SMTP error:", error)
      return NextResponse.json(
        { error: "邮件发送失败，请稍后重试" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("[contact-api] Failed to process contact form", error)
    return NextResponse.json(
      { error: "服务器错误，请稍后重试" },
      { status: 500 }
    )
  }
}

// 辅助函数：获取网站状态标签
function getWebsiteStatusLabel(value: string): string {
  const labels: Record<string, string> = {
    none: "还没有网站",
    new: "有网站，但几乎没有自然流量",
    unstable: "有一些流量，但不稳定",
    mature: "成熟网站，寻求系统性增长",
  }
  return labels[value] || value
}

// 辅助函数：获取时间框架标签
function getTimeframeLabel(value: string): string {
  const labels: Record<string, string> = {
    "3m": "3 个月内（立即见效）",
    "3-6m": "3-6 个月（逐步增长）",
    "6-12m": "6-12 个月（长期投资）",
    unsure: "不确定，寻求建议",
  }
  return labels[value] || value
}

// 辅助函数：获取合作模式标签
function getPreferredModeLabel(value: string): string {
  const labels: Record<string, string> = {
    construction: "网站结构搭建与基础设施",
    consulting: "网站建设 + SEO 咨询支持",
    operation: "年度持续运营与优化",
    unsure: "还不确定",
  }
  return labels[value] || value
}

