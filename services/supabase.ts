
import { createClient } from '@supabase/supabase-js';

// Try multiple sources for environment variables
const getEnv = (key: string): string => {
  // 1. Try process.env (Vite define)
  // 2. Try import.meta.env (Vite default)
  // 3. Try with and without VITE_ prefix
  const val = (process.env as any)[key] || 
              (process.env as any)[`VITE_${key}`] || 
              (import.meta as any).env?.[key] || 
              (import.meta as any).env?.[`VITE_${key}`];
  
  return (val && val !== "undefined") ? val : "";
};

const url = getEnv('SUPABASE_URL');
const key = getEnv('SUPABASE_ANON_KEY');

/**
 * Diagnostics for the developer
 */
console.group("NitGyanam Connection Diagnostics");
console.log("Supabase URL Found:", !!url);
console.log("Supabase Key Found:", !!key);
if (url) {
  try {
    new URL(url);
    console.log("URL Format: Valid");
  } catch (e) {
    console.error("URL Format: INVALID (Must start with https://)");
  }
}
console.groupEnd();

const createSupabaseClient = () => {
  if (!url || !key) return null;

  try {
    return createClient(url, key);
  } catch (error) {
    console.error("Supabase Initialization Failed:", error);
    return null;
  }
};

export const supabase = createSupabaseClient();
