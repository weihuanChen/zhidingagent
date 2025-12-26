export function PrivacyContent() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-12">
          {/* 信息收集 */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">信息收集</h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                在以下情况下，本站可能会收集必要的信息：
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>你通过联系表单主动提交的信息（如姓名、邮箱、项目说明）</li>
                <li>基本的访问数据（如页面访问情况），用于了解网站使用情况并持续改进内容</li>
              </ul>
              <p>
                本站不会主动收集与你无关的个人敏感信息。
              </p>
            </div>
          </div>

          {/* 信息使用 */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">信息使用</h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                所收集的信息仅用于以下目的：
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>回复你的咨询或沟通合作事宜</li>
                <li>改进网站内容结构与用户体验</li>
                <li>进行必要的运营分析</li>
              </ul>
              <p>
                本站不会将你的信息出售、出租或用于任何与本站服务无关的用途。
              </p>
            </div>
          </div>

          {/* 第三方服务 */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">第三方服务</h2>
            <p className="text-lg leading-relaxed text-foreground">
              本站可能使用第三方分析工具（如网站分析服务）来了解整体访问情况。
              这些服务仅用于统计与改进目的，不用于识别个人身份。
            </p>
          </div>

          {/* 信息安全 */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">信息安全</h2>
            <p className="text-lg leading-relaxed text-foreground">
              我会采取合理措施保护你提供的信息，
              但请理解，任何互联网传输方式都无法做到绝对安全。
            </p>
          </div>

          {/* 政策更新 */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">政策更新</h2>
            <p className="text-lg leading-relaxed text-foreground">
              本隐私政策可能会根据网站运营情况进行更新，
              更新内容将发布在本页面。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

