<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <main class="max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
    <article class="prose mx-auto">
      <ContentRenderer v-if="page" :value="page" />
    </article>
  </main>
</template>
