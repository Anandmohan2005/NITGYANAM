
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    
    // Mapping keys to process.env for the build
    const config = {
      apiKey: env.VITE_GEMINI_API_KEY || env.API_KEY || "",
      supabaseUrl: env.VITE_SUPABASE_URL || env.SUPABASE_URL || "",
      supabaseKey: env.VITE_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY || ""
    };

    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(config.apiKey),
        'process.env.SUPABASE_URL': JSON.stringify(config.supabaseUrl),
        'process.env.SUPABASE_ANON_KEY': JSON.stringify(config.supabaseKey),
        // Adding VITE_ versions just in case
        'process.env.VITE_SUPABASE_URL': JSON.stringify(config.supabaseUrl),
        'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(config.supabaseKey),
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
