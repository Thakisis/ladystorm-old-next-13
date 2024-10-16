/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
 images: {
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: [ 'cs','en','es'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
 