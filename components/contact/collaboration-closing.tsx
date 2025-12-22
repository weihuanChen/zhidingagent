
import Link from "next/link"

export function CollaborationClosing() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
            <div className="mb-8 h-px w-full bg-border" />
            <p className="mb-4 text-muted-foreground">
                如果您更倾向于邮件联系或有特定附件需要分享：
            </p>
            <Link
                href="mailto:contact@zhidingagent.com"
                className="text-lg font-medium text-foreground hover:text-primary hover:underline"
            >
                contact@zhidingagent.com
            </Link>
            <p className="mt-8 text-sm text-muted-foreground">
                请注意：我保持较小的客户名单以确保质量。<br />
                并非所有项目都能被接受，但我会对每个咨询提供回复和方向指引。
            </p>
        </section>
    )
}
