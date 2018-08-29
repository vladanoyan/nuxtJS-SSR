module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Signature Jewelry",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],

    script: [
      {
        src: "https://www.google.com/recaptcha/api.js?render=explicit"
      }
    ]
  },
  /*
  ** Global CSS
  */
  plugins: [
    { src: "~/plugins/font-awesome", ssr: false },
    { src: "~/plugins/element", ssr: false }
  ],
  loading: {
    color: "#0111AA",
    height: "2px"
  },
  css: ["~/assets/styles/main.sass"],
  /*
  ** Add axios globally
  */
  // modules: [
  //   [
  //     "@nuxtjs/axios",
  //     {
  //       baseURL:
  //         process.env.APP === "local"
  //           ? "http://localhost:3000"
  //           : "https://invisibleexperts.net:5005"
  //     }
  //   ]
  // ],

  build: {
    vendor: ["axios"],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    "~/api/index.js"
  ]
}
