import type { H3Event } from 'h3'

export function getClientIp(event: H3Event): string {
  const forwarded = getRequestHeader(event, 'x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return getRequestIP(event) ?? ''
}
