/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placecats.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/classes/6-week-pottery-course-irvine',
        destination: '/classes/4-week-pottery-course-irvine',
        permanent: true, // use false if you want a temporary redirect
      },
    ];
  },
};

export default nextConfig;

