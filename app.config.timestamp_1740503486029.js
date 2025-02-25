// app.config.ts
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { dirname, resolve } from "path";
import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
console.log(import.meta.env.VITE_TEST_SOMETHING);
var app_config_default = defineConfig({
  server: {
    preset: "node-server"
  },
  vite: {
    plugins: [
      react(),
      tailwindcss(),
      tsConfigPaths({
        projects: ["./tsconfig.json"]
      })
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./app")
      }
    }
  }
});
export {
  app_config_default as default
};
