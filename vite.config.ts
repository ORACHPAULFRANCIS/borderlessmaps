import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ], // Simplified: removed the conditional and the .filter(Boolean) as they are no longer needed
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
