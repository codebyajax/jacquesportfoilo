import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
                    padding: "80px",
                    fontFamily: "Arial",
                }}
            >
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 700,
                    }}
                >
                    Jacques Azianou
                </div>

                <div
                    style={{
                        marginTop: 20,
                        fontSize: 34,
                        opacity: 0.8,
                    }}
                >
                    Fullstack Developer & UI/UX Designer
                </div>

                <div
                    style={{
                        marginTop: "auto",
                        fontSize: 28,
                        opacity: 0.6,
                    }}
                >
                    komiazianou.vercel.app
                </div>
            </div>
        ),
        size
    );
}