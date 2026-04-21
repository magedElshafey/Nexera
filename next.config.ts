import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "dashboard.abazeer.sa",
  //       port: "",
  //       pathname: "/storage/**",
  //       search: "",
  //     },
  //   ],
  // },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
