import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Amanda Edwards - Children's Book Author";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FFF8F0 0%, #FFE5E5 50%, #FFF0E0 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 107, 107, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(78, 205, 196, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "rgba(167, 139, 250, 0.1)",
          }}
        />

        {/* Emoji row */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: "48px",
            marginBottom: "24px",
          }}
        >
          <span>📚</span>
          <span>✨</span>
          <span>🌙</span>
          <span>🐉</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#2D3436",
            textAlign: "center",
            marginBottom: "8px",
            lineHeight: 1.1,
          }}
        >
          Amanda Edwards
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "#FF6B6B",
            textAlign: "center",
            marginBottom: "24px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Children&apos;s Book Author
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#636E72",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Magical stories that spark imagination and celebrate what makes every child unique.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "8px",
            background: "linear-gradient(90deg, #FF6B6B, #A78BFA, #4ECDC4, #FFE66D)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
