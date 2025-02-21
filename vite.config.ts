import { defineConfig } from "vite";
import path, { resolve } from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.join(__dirname, "../server/dist"),
    emptyOutDir: true,
  },
});
