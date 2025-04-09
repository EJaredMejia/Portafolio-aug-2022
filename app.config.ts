import tailwindcss from "@tailwindcss/vite";
import { dirname, resolve } from "path";
import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); // get the name of the directory

// https://vitejs.dev/config/
export default defineConfig({
  tsr: {
    appDirectory: 'app'
  },
  vite: {
    plugins: [
      tailwindcss(),
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./app"),
      },
    },
  },
});
