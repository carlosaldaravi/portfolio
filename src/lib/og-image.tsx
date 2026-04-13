import { ImageResponse } from "next/og";

export function createOGImage(subtitle: string) {
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
        {/* Logo CA */}
        <div
          style={{
            fontSize: "120px",
            fontWeight: 700,
            color: "#00d4d4",
            letterSpacing: "-0.02em",
            marginBottom: "20px",
          }}
        >
          CA
        </div>

        <div
          style={{
            fontSize: "48px",
            fontWeight: 300,
            color: "#ffffff",
            letterSpacing: "0.12em",
          }}
        >
          Carlos Aldaravi
        </div>

        <div
          style={{
            width: "60px",
            height: "2px",
            background: "#00d4d4",
            marginTop: "24px",
            marginBottom: "24px",
          }}
        />

        <div
          style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.6)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </div>

        <div
          style={{
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.3)",
            letterSpacing: "0.15em",
            marginTop: "32px",
          }}
        >
          carlosaldaravi.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
