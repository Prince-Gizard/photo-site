 
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

 modules: [
    '@nuxtjs/axios'
  ],
  axios: {
   baseUrl:  'http://localhost:3000',
  }
}

