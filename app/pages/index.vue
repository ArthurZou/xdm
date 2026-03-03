<script setup lang="ts">
const { loggedIn, user } = useUserSession()

const { data: page } = await useAsyncData('page-/', () => {
  return queryCollection('content').path('/').first()
})
</script>

<template>
  <div>
    <div v-if="loggedIn" class="user-bar">
      <img
        v-if="user?.picture"
        :src="user.picture"
        :alt="user.name"
        class="avatar"
        width="32"
        height="32"
        referrerpolicy="no-referrer"
      />
      <span class="user-name">{{ user?.name }}</span>
      <span class="user-email">{{ user?.email }}</span>
      <a href="/auth/logout" class="logout-link">Sign out</a>
    </div>

    <ContentRenderer v-if="page" :value="page" />

    <GoogleLoginModal v-if="!loggedIn" />
  </div>
</template>

<style scoped>
.user-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1.2rem;
  background: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
  font-size: 0.9rem;
}

.avatar {
  border-radius: 50%;
}

.user-name {
  font-weight: 600;
}

.user-email {
  color: #666;
}

.logout-link {
  margin-left: auto;
  color: #c00;
  text-decoration: none;
}

.logout-link:hover {
  text-decoration: underline;
}
</style>
