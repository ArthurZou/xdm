# Nuxt 部署指南

Nuxt 基于 **Nitro** 服务端引擎，可以编译为适配不同平台的输出格式，真正做到一次开发、处处部署。

## 构建命令

```bash
# SSR / Node.js 部署
npm run build
# 输出到 .output/

# 静态站点生成
npm run generate
# 输出到 .output/public/

# 预览生产构建
npm run preview
```

## 部署到各平台

### Vercel

零配置部署，Vercel 会自动检测 Nuxt 项目：

```bash
npm install -g vercel
vercel
```

或连接 Git 仓库后，每次推送自动部署。

### Cloudflare Pages

```bash
# nuxt.config.ts 中指定部署预设
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages'
  }
})
```

然后在 Cloudflare Pages 控制台连接 Git 仓库，构建命令设为 `npm run build`，输出目录设为 `.output/public`。

### Node.js 服务器

```bash
npm run build

# 将 .output/ 目录复制到服务器
node .output/server/index.mjs
```

配合 PM2 保持进程常驻：

```bash
pm2 start .output/server/index.mjs --name "my-nuxt-app"
```

### Docker

```dockerfile
FROM node:20-alpine

WORKDIR /app
COPY .output ./

ENV NITRO_PORT=3000
EXPOSE 3000

CMD ["node", "server/index.mjs"]
```

```bash
npm run build
docker build -t my-nuxt-app .
docker run -p 3000:3000 my-nuxt-app
```

### 静态托管（GitHub Pages / Netlify）

适用于 `npm run generate` 生成的纯静态站点：

```ts
// nuxt.config.ts（部署到子路径时需要配置）
export default defineNuxtConfig({
  app: {
    baseURL: '/my-repo-name/'
  }
})
```

将 `.output/public/` 目录内容上传或连接到静态托管服务即可。

## 环境变量

Nuxt 使用 `.env` 文件管理环境变量：

```bash
# .env
NUXT_PUBLIC_API_URL=https://api.example.com   # 客户端可访问
NUXT_SECRET_KEY=my-secret                      # 仅服务端
```

在代码中通过运行时配置访问：

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    secretKey: '',                    // 服务端私有
    public: {
      apiUrl: ''                      // 客户端公开
    }
  }
})
```

```ts
// 在组件或服务端中使用
const config = useRuntimeConfig()
console.log(config.public.apiUrl)     // 客户端可用
console.log(config.secretKey)         // 仅服务端可用
```

## 性能优化建议

- 启用 **Nuxt Image** 模块自动优化图片
- 使用 `routeRules` 为不同页面配置缓存策略
- 静态资源放入 `public/` 并配置长期缓存头
- 使用 `useAsyncData` + `getCachedData` 避免重复请求

[返回 Nuxt 介绍](/nuxt)
