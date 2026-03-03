<template>
  <div class="fixed inset-0 z-[1000] flex items-center justify-center backdrop-blur-sm bg-slate-900/70">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-2xl px-8 py-10 w-full max-w-sm mx-4 text-center">

      <!-- Logo -->
      <div class="flex justify-center mb-5">
        <div class="w-12 h-12 rounded-xl bg-[#0f2d5e] flex items-center justify-center text-white font-bold text-lg select-none">
          GM
        </div>
      </div>

      <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
        Sign in to continue
      </h2>
      <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">
        You need to sign in to access this page.
      </p>

      <!-- Google Sign-in Button -->
      <a
        href="/auth/google"
        class="inline-flex items-center gap-3 w-full justify-center px-5 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-600 transition-all"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
          width="20"
          height="20"
        />
        Sign in with Google
      </a>

    </div>
  </div>
</template>
