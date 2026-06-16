import type { NextConfig } from 'next'
import { run } from 'node:test'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: isGitHubPages ? '/amarmohite2001' : '',
  assetPrefix: isGitHubPages ? '/amarmohite2001' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig



// Always run pnpm run build:gh