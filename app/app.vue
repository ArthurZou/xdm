<script setup lang="ts">
const { loggedIn, user } = useUserSession()
const colorMode = useColorMode()

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <!-- Navigation Bar -->
    <header class="bg-[#0f2d5e] dark:bg-[#0a1929] sticky top-0 z-50 shadow-lg border-b border-[#1e4080]">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

        <!-- Left: Logo + App Name -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm select-none">
            GM
          </div>
          <span class="text-white font-semibold text-base tracking-wide hidden sm:block">GiveMeMoney</span>
        </div>

        <!-- Right: Actions -->
        <div class="flex items-center gap-2">

          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDark"
            class="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            :aria-label="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <!-- Moon icon (shown in light mode) -->
            <svg v-if="colorMode.value !== 'dark'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
            <!-- Sun icon (shown in dark mode) -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </button>

          <!-- User Info (when logged in) -->
          <template v-if="loggedIn">
            <img
              v-if="user?.picture"
              :src="user.picture"
              :alt="user?.name ?? 'Avatar'"
              class="w-8 h-8 rounded-full ring-2 ring-blue-400/60"
              width="32"
              height="32"
              referrerpolicy="no-referrer"
            />
            <span class="text-white font-medium text-sm hidden sm:block">{{ user?.name }}</span>
            <span class="text-slate-400 text-xs hidden md:block">{{ user?.email }}</span>
            <a
              href="/auth/logout"
              class="px-3 py-1.5 text-xs text-slate-200 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
            >
              Sign out
            </a>
          </template>

        </div>
      </div>
    </header>

    <NuxtPage />
    <GoogleLoginModal v-if="!loggedIn" />
  </div>
</template>
