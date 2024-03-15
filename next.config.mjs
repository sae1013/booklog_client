/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["shopping-phinf.pstatic.net"], // 여기에 이미지 호스트명 추가
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
