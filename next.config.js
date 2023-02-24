/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com',
        port: '',
        pathname: '/platform/**',
      },
    ],
  },
}

module.exports = nextConfig
