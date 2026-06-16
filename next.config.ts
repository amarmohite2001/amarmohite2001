import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/amarmohite2001',
  assetPrefix: '/amarmohite2001',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
