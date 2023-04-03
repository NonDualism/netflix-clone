/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //optimises the image and converts it to WebP format.
  //read more about this
  images: {
    domains: ['image.tmdb.org', 'assets.nflxext.com'],
  },
};

module.exports = nextConfig;
