export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const username = session?.user?.email ?? null
  trackEvent(event, username, { type: 'logout' })
  await clearUserSession(event)
  return sendRedirect(event, '/')
})
