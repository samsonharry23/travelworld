import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
// base "/travelworld/" is only needed for the production build (GitHub Pages
// project site). Local dev stays at "/" so the app loads at http://localhost:5173/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/travelworld/" : "/",
  plugins: [react(), eslint()],
}));
