/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  env: {
    MENDABLE_ANON_KEY: process.env.MENDABLE_ANON_KEY,
    MENDABLE_ANON_URL: process.env.MENDABLE_ANON_URL,
  },
  async redirects() {
    return [{
      source: '/docs/content-types',
      destination: '/docs/content-creation',
      permanent: true
    }, ]
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [{
        key: "Access-Control-Allow-Origin",
        value: "*"
      }, {
        key: "Access-Control-Allow-Methods",
        value: "GET,OPTIONS,POST"
      }, {
        key: "Access-Control-Allow-Headers",
        value: "*"
      }],
    }, ]
  },
}