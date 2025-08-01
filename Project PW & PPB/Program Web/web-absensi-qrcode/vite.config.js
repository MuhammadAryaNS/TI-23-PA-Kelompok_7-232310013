import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/sass/app.scss", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    server: {
        host: "0.0.0.0", // Memungkinkan akses dari IP lokal
        port: 5173,
        hmr: {
            host: "localhost",
        },
    },
    build: {
        outDir: "public/build",
        manifest: true,
    },
});
