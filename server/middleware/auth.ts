export default defineEventHandler(async (event) => {
  const path = getRequestURL(event).pathname

  // 跳过 OAuth 登录/回调接口，避免递归
  if (path.startsWith('/auth/')) return

  // 只对 API 接口做鉴权
  if (!path.startsWith('/api/')) return

  const session = await getUserSession(event)
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
})
