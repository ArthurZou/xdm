<script setup lang="ts">
const { data: page } = await useAsyncData('page-/', () => {
  return queryCollection('content').path('/').first()
})
</script>

<template>
  <main class="max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
    <article class="prose mx-auto">
      <ContentRenderer v-if="page" :value="page" />
    </article>
  </main>
</template>
