// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

    css: ['@/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
        '@nuxtjs/i18n',
        '@nuxt/content',
        '@nuxt/image',
        '@nuxtjs/tailwindcss'
    ],
    i18n: {
        locales: ['en', 'nl'],
        defaultLocale: 'nl',
        strategy: 'prefix',
        vueI18n: 'i18n.config.ts',
        detectBrowserLanguage: {
            useCookie: false,
            redirectOn: 'root', // only redirect on root path
            alwaysRedirect: false,
        },
        experimental: {
            bundle: {
                optimizeTranslationDirective: false,
            },
        },
    },
})
