# 博客网站项目

这是一个使用 Next.js 和 React 构建的现代博客网站项目。

## 技术栈

- **前端框架**: Next.js 15.1.0
- **UI 库**: React 19.0.0
- **样式**: Tailwind CSS
- **组件库**: Radix UI
- **表单处理**: React Hook Form
- **类型检查**: TypeScript

## 系统要求

- **Node.js**: 版本 22.x 或更高
- **npm**: 版本 10.x 或更高

## 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/您的用户名/blog-website.git
cd blog-website
```

2. **安装 Node.js**

请确保您已安装 Node.js 22.x 或更高版本。您可以从 [Node.js 官网](https://nodejs.org/) 下载并安装。

验证安装:
```bash
node -v
npm -v
```

3. **安装依赖**

```bash
npm install --legacy-peer-deps
```

4. **启动开发服务器**

```bash
npm run dev
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动。

## 构建生产版本

```bash
npm run build
```

## 启动生产服务器

```bash
npm run start
```

## 项目结构

- `/app` - Next.js 应用程序文件
- `/components` - React 组件
- `/public` - 静态资源
- `/styles` - CSS 样式文件

## 特性

- 响应式设计，适配各种设备
- 现代化 UI 组件
- 优化的性能
- SEO 友好

## 部署

本项目可以部署到 Vercel、Netlify 或其他支持 Next.js 的平台。

## 常见问题

### 依赖安装失败

如果依赖安装失败，可能是由于版本冲突。解决方法：
1. 确保使用 `--legacy-peer-deps` 参数
2. 清除 npm 缓存后重试：`npm cache clean --force`

### 启动失败

如果项目启动失败，请检查：
1. Node.js 版本是否兼容（需要 22.x 或更高）
2. 是否所有依赖都已正确安装
3. 查看控制台错误信息以获取更具体的问题

## 许可

[MIT](LICENSE) 