import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    // compress: true,
    // poweredByHeader: false, 


    // images: {
    //     // formats: ["image/avif", "image/webp"],
    //     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    //     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    //     minimumCacheTTL: 60 * 60 * 24 * 365,
    //     unoptimized: false,
    // },


    // async headers() {
    //     return [
    //         {
    //             source: "/:path*",
    //             headers: [
    //                 {
    //                     key: "X-Content-Type-Options",
    //                     value: "nosniff",
    //                 },
    //                 {
    //                     key: "X-Frame-Options",
    //                     value: "DENY",
    //                 },
    //                 {
    //                     key: "X-XSS-Protection",
    //                     value: "1; mode=block",
    //                 },
    //                 {
    //                     key: "Referrer-Policy",
    //                     value: "strict-origin-when-cross-origin",
    //                 },
    //                 {
    //                     key: "Permissions-Policy",
    //                     value: "geolocation=(), microphone=(), camera=()",
    //                 },

    //                 {
    //                     key: "Cache-Control",
    //                     value: "public, max-age=31536000, immutable",
    //                     source: "/assets/:path*",
    //                 },

    //                 {
    //                     key: "Cache-Control",
    //                     value: "public, max-age=3600, s-maxage=3600",
    //                     source: "/:path*",
    //                 },
    //             ],
    //         },
    //     ];
    // },


    // async redirects() {
    //     return [

    //         {
    //             source: "/:path*",
    //             has: [
    //                 {
    //                     type: "host",
    //                     value: "www.your-domain.com",
    //                 },
    //             ],
    //             destination: "https://your-domain.com/:path*",
    //             permanent: true,
    //         },

    //         {
    //             source: "/index.html",
    //             destination: "/",
    //             permanent: true,
    //         },
    //     ];
    // },


    // async rewrites() {
    //     return {
    //         beforeFiles: [
              
    //         ],
    //     };
    // },

    // productionBrowserSourceMaps: false,

    // env: {
    //     NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    // },
};

export default nextConfig;