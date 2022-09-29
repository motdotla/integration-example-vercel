/** @type {import('next').NextConfig} */
require('dotenv-vault').config({ debug: true, override: true })

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
