/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  images: {
    domains: ['imdb-api.com', 'm.media-amazon.com']
  }
};

module.exports = nextConfig;
