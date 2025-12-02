const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/full-next' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/full-next/' : '',
}
module.exports = nextConfig;