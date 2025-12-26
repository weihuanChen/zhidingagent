import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Briefcase, BookOpen } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        {/* 404 数字 */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary/20 md:text-9xl">404</h1>
        </div>

        {/* 标题和描述 */}
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          页面未找到
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          抱歉，您访问的页面不存在。可能是链接错误或页面已被移动。
        </p>

        {/* 导航按钮组 */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="group rounded-lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              返回首页
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-lg">
            <Link href="/case">
              <Briefcase className="mr-2 h-4 w-4" />
              查看案例
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-lg">
            <Link href="/insights">
              <BookOpen className="mr-2 h-4 w-4" />
              浏览知识库
            </Link>
          </Button>
        </div>

        {/* 提示文字 */}
        <p className="mt-12 text-sm text-muted-foreground">
          或者，您可以通过导航菜单访问其他页面
        </p>
      </div>
    </div>
  )
}
