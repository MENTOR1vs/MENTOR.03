/**
 *  Configures the Vite development server.
 *
 * Responsibilities:
 * - Expose the client outside the Docker container.
 * - Use a fixed development port.
 * - Forward /api requests to the Express backend.
 */
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Allows access from the host computer when Vite runs in docker
    port: Number(process.env.PORT || 5173),
    strictPort: true, //Stops starup instead of selecting another port
    proxy: { //Keeps API urls relative in the frontend
      "/api": {
        target:
          process.env.VITE_API_PROXY_TARGET || "http://localhost:3000",
        changeOrigin: true
      }
    }
  }
});
