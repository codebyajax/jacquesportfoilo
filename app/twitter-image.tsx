import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#000",
                    color: "#fff",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "70px",
                    fontFamily: "Arial",
                }}
            >
                <div
                    style={{
                        fontSize: 68,
                        fontWeight: 700,
                    }}
                >
                    Jacques Azianou
                </div>

                <div
                    style={{
                        fontSize: 32,
                        marginTop: 18,
                        opacity: 0.8,
                    }}
                >
                    Building beautiful digital experiences.
                </div>
            </div>
        ),
        size
    );
}