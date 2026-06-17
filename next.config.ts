import type { NextConfig } from 'next'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? '/amarmohite2001' : '',
  },
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