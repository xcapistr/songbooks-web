/** @type {import('next').NextConfig} */
const env = process.env.NODE_ENV

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'sk'],
    defaultLocale: 'en',
    localeDetection: env == 'production'
  },
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
