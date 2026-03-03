<script setup lang="ts">
const { data: page } = await useAsyncData('page-/', () => {
  return queryCollection('content').path('/').first()
})
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
