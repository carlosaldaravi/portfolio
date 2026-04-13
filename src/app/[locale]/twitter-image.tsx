import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Carlos Aldaravi - Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111827",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 300,
              color: "#ffffff",
              letterSpacing: "0.15em",
            }}
          >
            Carlos Aldaravi
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.5)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Software Developer
          </div>
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)",
              marginTop: "16px",
            }}
          />
          <div
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.35)",
              letterSpacing: "0.2em",
            }}
          >
            carlosaldaravi.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
