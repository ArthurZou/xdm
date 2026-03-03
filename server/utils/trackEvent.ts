import type { H3Event } from 'h3'

export async function trackEvent(
  event: H3Event,
  username: string | null,
  payload: Record<string, unknown>,
): Promise<void> {
  try {
    const supabase = getSupabaseClient()
    const clientip = getClientIp(event)
    await supabase.from('events').insert({ username, clientip, event: payload })
  } catch {
    // tracking must never break user flows
  }
}
