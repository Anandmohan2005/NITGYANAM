
import { createClient } from '@supabase/supabase-js';

/**
 * NitGyanam Supabase Connector
 * This helper ensures we pick up keys regardless of the deployment environment.
 */
const getVar = (key: string): string => {
  // Try all possible ways Vite or the host might inject variables
  const val = (import.meta as any).env?.[`VITE_${key}`] || 
              (import.meta as any).env?.[key] || 
              (process.env as any)[`VITE_${key}`] || 
              (process.env as any)[key];
  
  return (val && val !== "undefined" && val !== "") ? val : "";
};

const supabaseUrl = getVar('SUPABASE_URL');
const supabaseKey = getVar('SUPABASE_ANON_KEY');

// Detailed Diagnostics
console.group("NitGyanam Cloud Status");
console.log("Check 1: URL ->", supabaseUrl ? "Found ✅" : "MISSING ❌");
console.log("Check 2: Key ->", supabaseKey ? "Found ✅" : "MISSING ❌");

if (!supabaseUrl || !supabaseKey) {
  console.warn("NitGyanam: Cloud variables not detected. LocalStorage fallback active.");
  console.info("To Fix: Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your hosting dashboard.");
}
console.groupEnd();

const createSafeClient = () => {
  if (!supabaseUrl || !supabaseKey) return null;
  try {
    // Basic URL validation before creating client
    new URL(supabaseUrl);
    return createClient(supabaseUrl, supabaseKey);
  } catch (e) {
    console.error("NitGyanam: Invalid Supabase URL format provided.");
    return null;
  }
};

export const supabase = createSafeClient();
