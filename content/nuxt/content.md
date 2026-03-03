# Nuxt Content 模块

`@nuxt/content` 是 Nuxt 官方的内容管理模块，它将 `content/` 目录下的 Markdown、YAML、JSON、CSV 文件转换为可查询的数据库，让你轻松构建内容驱动的网站。

## 工作原理

```
content/*.md
    ↓ 构建时编译
.data/content/contents.sqlite（SQLite 数据库）
    ↓ 运行时查询
queryCollection('content').path('/blog/hello').first()
    ↓ 渲染
<ContentRenderer :value="page" />
```

## 安装配置

```bash
npm install @nuxt/content
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})
```

```ts
// content.config.ts
import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**'
    })
  }
})
```

## Markdown 增强语法（MDC）

Nuxt Content 扩展了标准 Markdown，支持直接在 `.md` 文件中嵌入 Vue 组件。

### 块级组件

```md
::alert{color="green"}
这是一个成功提示框
::

::card{title="卡片标题"}
卡片内容写在这里
::
```

### 内联组件

```md
这里有一个 :badge[新功能] 标签
```

### 传递复杂 Props

```md
::data-table
---
headers: ['姓名', '年龄', '城市']
rows:
  - ['张三', 25, '北京']
  - ['李四', 30, '上海']
---
::
```

## 查询内容

### 基本查询

```ts
// 获取单篇文章
const { data: page } = await useAsyncData('page',
  () => queryCollection('content').path('/blog/hello').first()
)

// 获取文章列表
const { data: posts } = await useAsyncData('posts',
  () => queryCollection('content')
    .where('_path', 'LIKE', '/blog/%')
    .order('date', 'DESC')
    .limit(10)
    .all()
)
```

### 全文搜索

```ts
const results = await queryCollection('content')
  .where('body', 'LIKE', `%${keyword}%`)
  .all()
```

## 渲染内容

```vue
<template>
  <article>
    <h1>{{ page.title }}</h1>
    <ContentRenderer :value="page" />
  </article>
</template>

<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(
  route.path,
  () => queryCollection('content').path(route.path).first()
)

if (!page.value) throw createError({ statusCode: 404 })
</script>
```

## Frontmatter

在 Markdown 文件顶部使用 YAML frontmatter 定义元数据：

```md
---
title: 我的文章标题
description: 文章描述，用于 SEO
date: 2026-03-01
tags: [nuxt, vue, web]
cover: /images/cover.jpg
---

# 文章正文从这里开始
```

这些字段可以在查询和模板中直接访问。

[返回 Nuxt 介绍](/nuxt)
