
import { createClient } from '@supabase/supabase-js';

// Get values from process.env (injected by Vite)
const rawUrl = process.env.SUPABASE_URL;
const rawKey = process.env.SUPABASE_ANON_KEY;

/**
 * Validates the configuration before attempting to create the client.
 * This prevents the 'Failed to construct URL' error.
 */
const getValidSupabaseClient = () => {
  if (!rawUrl || rawUrl === "" || rawUrl === "undefined") return null;
  if (!rawKey || rawKey === "" || rawKey === "undefined") return null;

  try {
    // Check if the URL is actually valid
    new URL(rawUrl);
    
    // If we reach here, strings exist and URL is valid. 
    // Now create the client with a safety wrapper.
    return createClient(rawUrl, rawKey);
  } catch (error) {
    console.warn("NitGyanam: Invalid Supabase configuration format detected. Falling back to local mode.");
    return null;
  }
};

export const supabase = getValidSupabaseClient();

// Developer logging
if (supabase) {
  console.info("NitGyanam: Cloud Database Connection established.");
} else {
  console.info("NitGyanam: Running in LocalStorage mode (Cloud DB variables missing).");
}
