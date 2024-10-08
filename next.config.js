/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.unplash.com",
            },
        ],
    },
    experimental: {
        serverActions: true,
      },
};

module.exports = nextConfig
