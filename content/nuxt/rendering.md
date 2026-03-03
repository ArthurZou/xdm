# Nuxt 渲染模式

Nuxt 提供多种渲染策略，可以根据页面需求灵活选择，甚至在同一应用中混合使用。

## 服务端渲染（SSR）

每次请求时在服务器上渲染 HTML，再发送给客户端。

**适用场景：** 需要实时数据、个性化内容或严格 SEO 要求的页面。

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true // 默认值
})
```

**优点：**
- 首屏加载快，用户立即看到内容
- 搜索引擎可以直接抓取完整 HTML
- 支持动态数据（每次请求都是最新的）

## 静态站点生成（SSG）

在构建时预先渲染所有页面，生成静态 HTML 文件。

**适用场景：** 博客、文档、营销页面等内容变化不频繁的站点。

```bash
# 生成静态站点
npx nuxi generate
```

**优点：**
- 极致性能，可部署到 CDN
- 无需服务器运行时
- 安全性高（无服务端逻辑暴露）

## 客户端渲染（CSR）

关闭 SSR，所有渲染在浏览器中完成，类似传统 SPA。

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false
})
```

**适用场景：** 后台管理系统、需要登录才能访问的应用。

## 混合渲染（Hybrid Rendering）

Nuxt 4 支持在路由级别配置渲染策略，同一应用可以混合多种模式。

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },          // 首页：预渲染
    '/blog/**': { swr: 3600 },         // 博客：每小时重新生成
    '/admin/**': { ssr: false },        // 后台：纯客户端
    '/api/**': { cors: true }           // API：跨域支持
  }
})
```

## 渲染模式对比

| 特性 | SSR | SSG | CSR |
|------|-----|-----|-----|
| 首屏速度 | 快 | 极快 | 慢 |
| SEO | 优秀 | 优秀 | 较差 |
| 动态数据 | 支持 | 有限 | 支持 |
| 服务器需求 | 需要 | 不需要 | 不需要 |
| 构建时间 | 短 | 长（页面多时） | 短 |

[返回 Nuxt 介绍](/nuxt)
