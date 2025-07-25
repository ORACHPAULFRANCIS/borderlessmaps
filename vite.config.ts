import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// The 'lovable-tagger' import has been removed.

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true, // This is good for local SPA development
  },
  plugins: [
    react(),
    // The conditional 'mode === 'development' && componentTagger(),' has been removed.
    // Since 'react()' is always a valid plugin, .filter(Boolean) is no longer strictly necessary,
    // but keeping it doesn't harm anything if you plan to add other conditional plugins later.
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
