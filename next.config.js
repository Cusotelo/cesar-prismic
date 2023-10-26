/** @type {import('next').NextConfig} */
const path = require('path')
 
// module.exports = {
// }
const nextConfig = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
