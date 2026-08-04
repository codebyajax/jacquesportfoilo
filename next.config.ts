import type { NextConfig } from "next";

const securityHeaders = [
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "X-Frame-Options",
        value: "DENY",
    },
    {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
    },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
    },
    {
        key: "Cross-Origin-Opener-Policy",
        value: "same-origin",
    },
    {
        key: "Cross-Origin-Resource-Policy",
        value: "same-origin",
    },
    {
        key: "Content-Security-Policy",
        value: [
            "default-src 'self'",
            "base-uri 'self'",
            "object-src 'none'",
            "frame-ancestors 'none'",
            "form-action 'self'",
            "img-src 'self' data: blob: https:",
            "font-src 'self' data:",
            "style-src 'self' 'unsafe-inline'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
            "connect-src 'self' https:",
            "frame-src 'none'",
            "upgrade-insecure-requests",
        ].join("; "),
    },
];

const nextConfig: NextConfig = {
    reactStrictMode: true,

    compress: true,

    poweredByHeader: false,

    productionBrowserSourceMaps: false,

    images: {
        formats: ["image/avif", "image/webp"],

        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

        minimumCacheTTL: 60 * 60 * 24 * 365,
    },

    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },

    async redirects() {
        return [
            {
                source: "/:path*",

                has: [
                    {
                        type: "host",
                        value: "www.komiazianou.vercel.app",
                    },
                ],

                destination: "https://komiazianou.vercel.app/:path*",

                permanent: true,
            },

            {
                source: "/index.html",

                destination: "/",

                permanent: true,
            },
        ];
    },
};

export default nextConfig;