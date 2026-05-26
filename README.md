# CrossAI - 跨境电商 AI 工具平台

一个专注于跨境电商卖家的 AI 视频生成与营销平台，帮助用户快速制作 TikTok/YouTube Shorts 等社交媒体平台的爆款带货视频。

## 功能特性

- 🎥 **AI 视频生成** - 文本生成视频、图片转视频、爆款复刻
- 🛠️ **工具中心** - 视频去水印、去字幕、角色替换等工具
- 📱 **发布工作台** - TikTok 账号管理和一键发布
- 📊 **用户中心** - 使用统计和生成历史

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署到 Vercel（推荐）

### 方法 1：使用 Vercel Dashboard（最简单）

1. **准备代码仓库**
   - 将代码推送到 GitHub、GitLab 或 Bitbucket
   - 确保项目包含 `package.json` 和 `vercel.json`

2. **连接到 Vercel**
   - 访问 https://vercel.com
   - 注册/登录 Vercel 账号
   - 点击 "New Project"
   - 导入你的代码仓库

3. **配置项目**
   - 项目名称：`crossai-platform`（或自定义）
   - Framework Preset：Vite（自动检测）
   - Build Command：`npm run build`（自动检测）
   - Output Directory：`dist`（自动检测）
   - 点击 "Deploy"

4. **等待部署完成**
   - 部署通常需要 1-2 分钟
   - 完成后会获得一个类似 `https://crossai-platform.vercel.app` 的域名

### 方法 2：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod
```

### 自定义域名

1. 在 Vercel Dashboard 中进入项目设置
2. 点击 "Domains"
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录

## 其他部署选项

### Netlify

1. 访问 https://netlify.com
2. 导入你的代码仓库
3. 配置构建命令：`npm run build`
4. 发布目录：`dist`
5. 点击 "Deploy"

### GitHub Pages

1. 修改 `vite.config.ts` 中的 `base` 路径
2. 使用 `gh-pages` 包部署
3. 推送到 GitHub

## 项目结构

```
/
├── src/
│   ├── components/      # 组件
│   ├── pages/           # 页面
│   ├── store/           # 状态管理
│   └── App.tsx          # 应用入口
├── public/              # 静态资源
├── vercel.json          # Vercel 配置
└── package.json         # 项目配置
```

## 技术栈

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Zustand
- Lucide Icons

## 团队协作

部署完成后，您可以：
1. 将部署链接分享给团队成员
2. 在 Vercel 中添加团队成员协作者
3. 设置 Preview Deployments 用于代码审查
4. 配置 Environment Variables 管理敏感信息

## 环境变量

如需配置环境变量，在 Vercel Dashboard 的项目设置中添加：
- 变量名需要以 `VITE_` 开头才能在客户端访问
- 例如：`VITE_API_URL=https://api.example.com`

## 许可证

MIT
