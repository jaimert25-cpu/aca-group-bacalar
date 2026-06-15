/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Las fuentes se cargan vía <link> en el layout (runtime), no en build.
  optimizeFonts: false,
};
export default nextConfig;
