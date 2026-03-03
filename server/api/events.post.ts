export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (body?.type !== 'click') {
    throw createError({ statusCode: 400, message: 'Invalid event type' })
  }

  const session = await getUserSession(event)
  const username = session?.user?.email ?? null

  await trackEvent(event, username, body)

  return { ok: true }
})
