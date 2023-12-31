// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
     title: 'TRAVEL APP',
     link: [{ rel: "icon", type: "image/svg+xml", href: "/travel-svgrepo-com.svg"}]
    }
}
})
