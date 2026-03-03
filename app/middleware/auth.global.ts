export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()

  // 首页不做跳转（展示登录 modal），避免循环重定向
  if (to.path === '/') return

  if (!loggedIn.value) {
    return navigateTo('/')
  }
})
