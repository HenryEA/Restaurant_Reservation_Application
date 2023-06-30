/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
  },
  env: {
    NEXTAUTH_SECRET: "codingwithhenro",
    DATABASE_URL:
      "postgresql://postgres:nB8DrOcahUyngdVa@db.seinvctvnoqeeycmccpt.supabase.co:5432/postgres",
    JWT_SECRET: "h4f8henvh8ev9hnebev90avanvrj})*h()Bub9cedvj",
  },
};

module.exports = nextConfig;
