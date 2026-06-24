import type { MetadataRoute } from "next";


const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";


const routes: Array<{
    path: string;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    priority: number;
    lastModified: Date;
}> = [
        {
            path: "/",
            changeFrequency: "weekly",
            priority: 1.0,
            lastModified: new Date(),
        },
        {
            path: "/about",
            changeFrequency: "monthly",
            priority: 0.9,
            lastModified: new Date("2024-01-15"),
        },
        {
            path: "/work",
            changeFrequency: "weekly",
            priority: 0.9,
            lastModified: new Date(),
        },
        {
            path: "/blog",
            changeFrequency: "daily",
            priority: 0.8,
            lastModified: new Date(),
        },
        {
            path: "/contact",
            changeFrequency: "yearly",
            priority: 0.7,
            lastModified: new Date(),
        },
    ];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map(({ path, changeFrequency, priority, lastModified }) => ({
        url: `${BASE_URL}${path}`,
        lastModified,
        changeFrequency,
        priority,
    }));
}
