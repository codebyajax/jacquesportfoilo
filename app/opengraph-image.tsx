import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

const instagramSans = fs.readFileSync(
    path.join(
        process.cwd(),
        "public/assets/fonts/InstagramSans-Regular.otf"
    )
);

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    padding: "80px",
                    background: "#0A0A0A",
                    color: "#ffffff",
                    fontFamily: "Instagram Sans",
                }}
            >
                {/* Grid Background */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Glow */}
                <div
                    style={{
                        position: "absolute",
                        top: "-150px",
                        right: "-150px",
                        width: "450px",
                        height: "450px",
                        borderRadius: "9999px",
                        background: "rgba(255,255,255,0.06)",
                        filter: "blur(100px)",
                    }}
                />

                {/* Header */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 10,
                    }}
                >
                    <span
                        style={{
                            fontSize: 76,
                            fontWeight: 700,
                            lineHeight: 1,
                        }}
                    >
                        Jacques Azianou
                    </span>

                    <span
                        style={{
                            marginTop: 20,
                            fontSize: 34,
                            color: "#A1A1AA",
                        }}
                    >
                        Fullstack Developer · UI/UX Designer
                    </span>
                </div>


                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        zIndex: 10,
                    }}
                >
                    <span
                        style={{
                            fontSize: 28,
                            color: "#D4D4D8",
                        }}
                    >
                        codebyajax
                    </span>

                    <div
                        style={{
                            display: "flex",
                            gap: 14,
                        }}
                    >
                        {["React", "Next.js", "JavaScript"].map((item) => (
                            <div
                                key={item}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "12px 22px",
                                    borderRadius: 999,
                                    border: "1px solid rgba(255,255,255,0.18)",
                                    background: "rgba(255,255,255,0.03)",
                                    fontSize: 22,
                                    color: "#F4F4F5",
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "Instagram Sans",
                    data: instagramSans,
                    style: "normal",
                    weight: 400,
                },
            ],
        }
    );
}