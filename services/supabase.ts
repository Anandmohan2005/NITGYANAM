
import { createClient } from '@supabase/supabase-js';

// Get values from process.env (injected by Vite define)
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// Strict validation function for URL
const isValidUrl = (url: string | undefined): boolean => {
  if (!url || url === 'undefined' || url === '') return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch (e) {
    return false;
  }
};

// Only create the client if we have a valid URL and an API key
// This prevents the "Failed to construct 'URL'" error during runtime
export const supabase = (isValidUrl(SUPABASE_URL) && SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== 'undefined' && SUPABASE_ANON_KEY !== '') 
  ? createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!)
  : null;

if (!supabase) {
  console.warn("Supabase credentials missing or invalid. Application will run in LocalStorage mode.");
}
