/** @type {import('next').NextConfig} */
const env = process.env.NODE_ENV

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'sk'],
    defaultLocale: 'en-US',
    localeDetection: env == "production",
  },
}

module.exports = nextConfig
