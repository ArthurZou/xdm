export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: { name: user.name, email: user.email, picture: user.picture },
    })
    trackEvent(event, user.email ?? null, {
      type: 'login',
      provider: 'google',
      name: user.name,
      email: user.email,
    })
    return sendRedirect(event, '/')
  },
  async onError(event, error) {
    console.error('Google OAuth error:', error)
    return sendRedirect(event, '/?error=oauth_failed')
  },
})
