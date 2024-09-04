// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-08-29",
    devtools: { enabled: true },
    css: ["@/assets/css/main.css"],
    modules: ["@pinia/nuxt"],
    app: {
        baseURL: "https://sztakler.github.io/Lampa/",
    },
    // routeRules: {
    //     "/": { prerender: false },
    // },
});
