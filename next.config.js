/** @type {import('next').NextConfig} */
require('dotenv-vault').config({ debug: true, override: true })

console.log(process.env.NODE_ENV)

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
