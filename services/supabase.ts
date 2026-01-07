
import { createClient } from '@supabase/supabase-js';

// Get values from process.env (injected by Vite define)
// Use a fallback to null or an empty string but handle it carefully
const rawUrl = process.env.SUPABASE_URL || '';
const rawKey = process.env.SUPABASE_ANON_KEY || '';

/**
 * Validates a string as a proper HTTP/HTTPS URL.
 * This prevents the Supabase library from trying to 'new URL("")' internally and crashing.
 */
const validateSupabaseConfig = (url: string, key: string): { url: string, key: string } | null => {
  if (!url || url === 'undefined' || url.trim() === '') return null;
  if (!key || key === 'undefined' || key.trim() === '') return null;
  
  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return { url, key };
    }
    return null;
  } catch (e) {
    return null;
  }
};

const config = validateSupabaseConfig(rawUrl, rawKey);

/**
 * We only initialize createClient if we have a guaranteed valid URL string.
 */
export const supabase = config 
  ? createClient(config.url, config.key)
  : null;

// Inform the developer clearly in the console
if (!supabase) {
  console.info("NitGyanam: Supabase is NOT initialized because VITE_SUPABASE_URL/KEY are missing. Falling back to LocalStorage mode.");
} else {
  console.info("NitGyanam: Cloud Database is active.");
}
