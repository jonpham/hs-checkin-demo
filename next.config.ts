import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Direct Index to Student
      {
        source: '/',
        destination: '/students',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
