import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true, // 自動開啟瀏覽器
  },
  plugins: [react()],
});
