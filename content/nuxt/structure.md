# Nuxt 目录结构

Nuxt 通过约定的目录结构来组织代码，每个目录都有其特定用途。了解这些约定是高效使用 Nuxt 的基础。

## 核心目录

### `app/` 或根目录

```
my-nuxt-app/
├── app/
│   ├── pages/          # 页面组件，自动生成路由
│   ├── components/     # Vue 组件，自动导入
│   ├── layouts/        # 页面布局模板
│   ├── composables/    # 组合式函数，自动导入
│   ├── middleware/     # 路由中间件
│   └── plugins/        # Nuxt 插件
├── content/            # Markdown 内容（需 @nuxt/content 模块）
├── server/             # 服务端 API 和中间件
│   ├── api/            # API 路由（/api/...）
│   ├── routes/         # 自定义服务端路由
│   └── middleware/     # 服务端中间件
├── public/             # 静态资源（直接暴露到根路径）
├── assets/             # 需要构建处理的资源（CSS、图片等）
└── nuxt.config.ts      # Nuxt 配置文件
```

## pages/ — 文件系统路由

`pages/` 目录下的每个 `.vue` 文件都会自动映射为一个路由：

```
pages/
├── index.vue           → /
├── about.vue           → /about
├── blog/
│   ├── index.vue       → /blog
│   └── [slug].vue      → /blog/:slug（动态路由）
└── [...slug].vue       → /*（捕获所有路由）
```

## components/ — 自动导入组件

放在 `components/` 目录下的组件无需 `import` 即可直接在模板中使用：

```vue
<!-- 无需 import，直接使用 -->
<template>
  <MyButton>点击我</MyButton>
  <base-card title="标题">内容</base-card>
</template>
```

子目录名会成为组件名的前缀：

```
components/
├── base/
│   └── Card.vue        → <BaseCard />
└── ui/
    └── Button.vue      → <UiButton />
```

## composables/ — 组合式函数

可复用的逻辑封装在 `composables/` 目录，同样自动导入：

```ts
// composables/useCounter.ts
export const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
}
```

```vue
<!-- 任意组件中直接使用 -->
<script setup>
const { count, increment } = useCounter()
</script>
```

## server/ — 服务端 API

`server/api/` 下的文件自动成为 API 端点：

```ts
// server/api/hello.get.ts
export default defineEventHandler((event) => {
  return { message: 'Hello from Nuxt server!' }
})
// 访问 GET /api/hello
```

文件命名支持 HTTP 方法后缀：`.get.ts`、`.post.ts`、`.put.ts`、`.delete.ts`

## public/ vs assets/

- **`public/`** — 文件直接复制到输出目录，通过根路径访问（如 `/favicon.ico`）
- **`assets/`** — 由 Vite 处理，支持哈希文件名、优化压缩，通过 `~/assets/` 引用

[返回 Nuxt 介绍](/nuxt)
