/** @type {import('next').NextConfig} */

const { hostname } = require('os')
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    prependData: `@import "main.sass"`,
  },
  images: {
    remotePatterns:[{
      hostname: 'cdn.shopify.com',
      protocol: 'https',
    }]
  }
}

module.exports = nextConfig

// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// /** @type {import('next').NextConfig} */

// // Get the directory name of the current module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const nextConfig = {
//     sassOptions: {
//     includePaths: [join(__dirname, 'src/sass')],
//     prependData: `@import "main.sass"`,
//     },
// };

// export default nextConfig;