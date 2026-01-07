
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    
    // Environment variables with fallback
    const apiKey = process.env.API_KEY || env.VITE_GEMINI_API_KEY || env.API_KEY || "AIzaSyC8s_IxQn8GyLCHlKdf9uUARLjL2OJfrZ4";
    const supabaseUrl = process.env.SUPABASE_URL || env.VITE_SUPABASE_URL || env.SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY || '';

    return {
      // Base path '/' is standard for Vercel
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(apiKey),
        'process.env.SUPABASE_URL': JSON.stringify(supabaseUrl),
        'process.env.SUPABASE_ANON_KEY': JSON.stringify(supabaseKey),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'esbuild',
        chunkSizeWarningLimit: 1000,
      }
    };
});
