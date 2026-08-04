import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Jacques Azianou",

        short_name: "Jacques",

        description:
            "Fullstack Developer & UI/UX Designer",

        start_url: "/",

        display: "standalone",

        background_color: "#000",

        theme_color: "#000",

        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}