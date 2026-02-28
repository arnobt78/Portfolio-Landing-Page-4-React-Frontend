/**
 * Vite config: React plugin, Tailwind 4 via @tailwindcss/vite.
 * build.rollupOptions: suppress EVAL warning from three-stdlib; manualChunks split three/gsap/react for caching; chunkSizeWarningLimit allows large three bundle.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress eval warning from third-party three-stdlib/lottie (we cannot fix node_modules)
        if (warning.code === "EVAL" && warning.id?.includes("three-stdlib")) return;
        warn(warning);
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three") || id.includes("node_modules/@react-three")) {
            return "three";
          }
          if (id.includes("node_modules/gsap")) {
            return "gsap";
          }
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react-vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1100,
  },
});
