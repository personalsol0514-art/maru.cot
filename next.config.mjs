/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages に静的サイトとしてデプロイするための設定。
  // `npm run build` を実行すると `out/` に静的HTMLが出力される。
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
