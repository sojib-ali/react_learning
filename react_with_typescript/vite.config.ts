import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// vite.config.js
// import { qrcode } from "vite-plugin-qrcode";

// export default defineConfig({
//   plugins: [
//     qrcode(), // only applies in dev mode
//   ],
// });
