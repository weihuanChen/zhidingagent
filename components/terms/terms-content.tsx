export function TermsContent() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-12">
          {/* 服务性质说明 */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">服务性质说明</h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                本站所提供的内容，包括文章、案例与方法论，
                均为经验分享与专业参考，不构成任何结果承诺。
              </p>
              <p>
                SEO、网站建设及长期运营效果，
                会受到行业、竞争、执行情况等多种因素影响，
                因此无法保证具体排名、流量或商业结果。
              </p>
            </div>
          </div>

          {/* 合作与责任边界 */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">合作与责任边界</h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                在实际合作中：
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>域名、服务器及网站所有权通常由客户方提供并持有</li>
                <li>网站分析与必要的 SEO 分析工具包含在服务范围内（如有说明）</li>
                <li>客户需配合提供必要的访问权限与基础资料</li>
              </ul>
              <p>
                若缺乏必要配合，服务效果可能受到影响。
              </p>
            </div>
          </div>

          {/* 内容与知识产权 */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">内容与知识产权</h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                本站所发布的文字、结构与方法论内容，
                除非另有说明，均为原创内容。
              </p>
              <p>
                未经许可，不得用于商业复制或大规模转载。
              </p>
            </div>
          </div>

          {/* 合作筛选权 */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">合作筛选权</h2>
            <p className="text-lg leading-relaxed text-foreground">
              我保留是否接受合作请求的权利，
              以确保项目与当前服务方式和精力安排相匹配。
            </p>
          </div>

          {/* 条款更新 */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">条款更新</h2>
            <p className="text-lg leading-relaxed text-foreground">
              服务条款可能根据实际情况进行调整，
              更新内容将发布在本页面。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

