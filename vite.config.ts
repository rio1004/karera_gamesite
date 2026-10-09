import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const PORT = Number(env.VITE_PORT) || 5173;
  const BACKEND_PORT = Number(env.VITE_BE_PORT) || 8000;
  const HOST = env.VITE_URL || "localhost";

  return {
    base: "/game-site/",
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "0.0.0.0",
      port: PORT,
      watch: {
        usePolling: true,
        interval: 1000,
      },
      proxy: {
        "/api": {
          target: `http://${HOST}:${BACKEND_PORT}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""), // remove /api prefix
        },
      },
      hmr: {
        clientPort: 3000, // match your exposed port
        host: "172.17.0.1", // your host machine’s IP (not localhost)
      },
    },
  };
});
