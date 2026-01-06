/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['antd', '@ant-design/icons'],
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
};

module.exports = nextConfig;
