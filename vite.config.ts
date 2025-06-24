import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ["buwon.synology.me"],
    port: 3001,
    open: true,
  },
});
