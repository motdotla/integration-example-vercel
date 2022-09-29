/** @type {import('next').NextConfig} */
require('dotenv-vault').config({ debug: true })

console.log(process.env) // output for debugging purposes. remove when going to production.

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
