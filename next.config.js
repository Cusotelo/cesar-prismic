/** @type {import('next').NextConfig} */
const path = require('path');
 
// module.exports = {
// }
const nextConfig = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      });
      return config;
    },
}

module.exports = nextConfig

