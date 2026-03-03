import { createClient } from '@supabase/supabase-js'

let client: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (!client) {
    const config = useRuntimeConfig()
    client = createClient(config.supabase.url, config.supabase.serviceRoleKey, {
      auth: { persistSession: false },
    })
  }
  return client
}
