// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-08-29",
    devtools: { enabled: true },
    css: ["@/assets/css/main.css"],
    modules: ["@pinia/nuxt", "@vite-pwa/nuxt"],
    app: {
        baseURL: "/Lampa/",
    },
    runtimeConfig: {
        public: {
            baseURL: "/Lampa",
        },
    },
    pwa: {
        manifest: {
            name: "Czy jest dzisiaj lampa?",
            short_name: "Lampa",
            lang: "en",
            start_url: "/Lampa",
            display: "standalone",
            background_color: "#fbfaf9",
            theme_color: "#171511",
            icons: [
                {
                    src: "/Lampa/icons/icon-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "/Lampa/icons/icon-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
            ],
            screenshots: [
                {
                    src: "/Lampa/screenshots/mobile.png",
                    sizes: "382x810",
                    type: "image/png",
                    label: "Application mobile",
                },
                {
                    src: "/Lampa/screenshots/desktop.png",
                    sizes: "1019x911",
                    type: "image/png",
                    form_factor: "wide",
                    label: "Application desktop",
                },
            ],
        },
        workbox: {
            navigateFallback: "/Lampa",
            runtimeCaching: [
                {
                    urlPattern: "https://fonts.googleapis.com/.*",
                    handler: "CacheFirst",
                    method: "GET",
                },
                {
                    urlPattern: "https://fonts.gstatic.com/.*",
                    handler: "CacheFirst",
                    method: "GET",
                },
            ],
        },
        devOptions: {
            enabled: true,
            type: "module",
        },
    },
});
