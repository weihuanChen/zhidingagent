# 联系表单邮件发送配置

## 概述

联系表单 (`/contact`) 已集成邮件发送功能，使用 Nodemailer + SMTP 发送咨询邮件。支持通过任何 SMTP 服务器发送邮件，包括 Gmail、Outlook、企业邮箱等。

## 配置步骤

### 1. 安装依赖

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 2. 配置 SMTP 服务器

您可以使用以下任一 SMTP 服务：

#### 选项 A: Gmail（推荐用于测试）

1. 使用 Gmail 账号
2. 启用"两步验证"
3. 生成"应用专用密码"（[生成链接](https://myaccount.google.com/apppasswords)）

#### 选项 B: Outlook/Hotmail

使用 Outlook 账号和密码

#### 选项 C: 企业邮箱（推荐用于生产环境）

使用您公司的企业邮箱 SMTP 设置

#### 选项 D: Cloudflare Email Routing + SMTP

如果您使用 Cloudflare Email Routing 接收邮件，可以配置一个 SMTP 服务器来发送邮件。Cloudflare Email Routing 本身不支持发送，但您可以：
- 使用 Gmail/Outlook 作为 SMTP 服务器发送
- 使用企业邮箱的 SMTP 服务器发送
- 使用其他 SMTP 服务（如 SendGrid、Mailgun 等）

### 3. 设置环境变量

在项目根目录创建 `.env.local` 文件（不要提交到 Git），添加以下变量：

```env
# SMTP 服务器配置
SMTP_HOST=smtp.gmail.com          # SMTP 服务器地址
SMTP_PORT=587                      # SMTP 端口（587 用于 TLS，465 用于 SSL）
SMTP_SECURE=false                  # true 用于 465 端口，false 用于其他端口
SMTP_USER=your-email@gmail.com    # SMTP 用户名（通常是邮箱地址）
SMTP_PASS=your-app-password       # SMTP 密码（Gmail 使用应用专用密码）

# 发件人邮箱
SMTP_FROM_EMAIL=contact@zhidingagent.com

# 接收咨询邮件的邮箱地址（可以是 Cloudflare Email Routing 转发的邮箱）
CONTACT_EMAIL=your-receive-email@gmail.com

# 网站基础 URL（用于 SEO）
NEXT_PUBLIC_SITE_URL=https://zhidingagent.com
```

### 4. 常用 SMTP 配置示例

#### Gmail

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_FROM_EMAIL=your-email@gmail.com
```

#### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
SMTP_FROM_EMAIL=your-email@outlook.com
```

#### QQ 邮箱

```env
SMTP_HOST=smtp.qq.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@qq.com
SMTP_PASS=your-authorization-code
SMTP_FROM_EMAIL=your-email@qq.com
```

#### 企业邮箱（示例：腾讯企业邮箱）

```env
SMTP_HOST=smtp.exmail.qq.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
SMTP_FROM_EMAIL=your-email@yourdomain.com
```

### 5. Cloudflare Email Routing 集成

如果您使用 Cloudflare Email Routing：

1. **接收邮件**：在 Cloudflare Dashboard 配置 Email Routing，将 `contact@zhidingagent.com` 转发到您的个人邮箱
2. **发送邮件**：配置上述 SMTP 设置，使用任何可用的 SMTP 服务器发送邮件
3. **发件人地址**：建议使用 `contact@zhidingagent.com` 作为发件人（如果 SMTP 服务器支持）

**注意**：Cloudflare Email Routing 只能接收和转发邮件，不能发送邮件。您仍然需要配置 SMTP 服务器来发送邮件。

### 6. 测试

1. 启动开发服务器：`npm run dev`
2. 访问 `/contact` 页面
3. 填写并提交表单
4. 检查配置的接收邮箱是否收到邮件
5. 如果使用 Cloudflare Email Routing，检查转发邮箱是否收到邮件

## API 路由

- **路径**: `/api/contact`
- **方法**: `POST`
- **请求体**: JSON 格式的表单数据

### 请求示例

```json
{
  "name": "张三",
  "email": "zhangsan@example.com",
  "industry": "manufacturing",
  "website": "https://example.com",
  "websiteStatus": "new",
  "challenge": "希望获得更多询盘",
  "timeframe": "3-6m",
  "preferredMode": "consulting",
  "other": "其他信息"
}
```

### 响应示例

**成功**:
```json
{
  "success": true,
  "message": "咨询已提交，我们会尽快与您联系",
  "id": "email_id_from_resend"
}
```

**失败**:
```json
{
  "error": "错误信息"
}
```

## 邮件内容

邮件包含以下信息：
- 基本信息（姓名、邮箱、行业、网站）
- 网站状态
- 核心问题
- 预期时间框架
- 首选合作模式
- 其他信息（如有）
- 提交时间

邮件格式为 HTML，同时包含纯文本版本。

## 故障排查

### 邮件发送失败

1. **检查 SMTP 配置**: 确认所有 SMTP 环境变量正确设置
2. **检查 SMTP 凭据**: 确认用户名和密码正确（Gmail 需要使用应用专用密码）
3. **检查端口和加密设置**: 
   - 端口 587 通常使用 `SMTP_SECURE=false`（TLS）
   - 端口 465 通常使用 `SMTP_SECURE=true`（SSL）
4. **检查接收邮箱**: 确认 `CONTACT_EMAIL` 正确设置
5. **查看服务器日志**: 检查控制台输出的错误信息

### 常见错误

- `Invalid login`: SMTP 用户名或密码错误
- `Connection timeout`: SMTP 服务器地址或端口不正确
- `Authentication failed`: 
  - Gmail: 需要使用应用专用密码，而不是普通密码
  - 某些邮箱需要启用 SMTP 服务
- `Self signed certificate`: 某些企业邮箱可能需要禁用证书验证（不推荐）
- `Rate limit exceeded`: 发送频率过高，需要等待

### Gmail 特殊配置

如果使用 Gmail：

1. **启用两步验证**（必需）
2. **生成应用专用密码**：
   - 访问 https://myaccount.google.com/apppasswords
   - 选择"邮件"和"其他（自定义名称）"
   - 生成 16 位密码
   - 使用此密码作为 `SMTP_PASS`
3. **如果仍然失败**，尝试：
   - 检查"允许不够安全的应用"设置（已弃用，但某些情况下仍需要）
   - 或使用 OAuth2（需要额外配置）

## 替代方案

如果不想使用 SMTP，可以：

1. **使用 Resend**: 修改代码使用 Resend API（需要验证域名）
2. **使用 SendGrid**: 配置 SendGrid SMTP 或 API
3. **使用 Mailgun**: 配置 Mailgun SMTP 或 API
4. **使用 AWS SES**: 配置 AWS SES SMTP
5. **使用第三方表单服务**: Typeform、Formspree、FormSubmit 等

## 安全注意事项

1. **不要提交 `.env.local`**: 确保 `.env.local` 在 `.gitignore` 中
2. **API Key 安全**: 不要在客户端代码中暴露 API Key
3. **速率限制**: 考虑添加速率限制防止滥用
4. **输入验证**: API 路由已包含基本验证，可根据需要增强

