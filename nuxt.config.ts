// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/ui"],
  googleFonts: {
    families: {
      Poppins: [100,200,300,400,500,700]
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  }
});
