import React from "react";

interface CoupleProps {
  groomName?: string;
  brideName?: string;
  groomPhoto?: string;
  bridePhoto?: string;
  weddingDate?: string;
}

const CoupleInfo: React.FC<CoupleProps> = ({
  groomName = "Нурбек",
  brideName = "Айжан",
  groomPhoto = "👨‍💼",
  bridePhoto = "👰‍♀️",
  weddingDate = "15-август 2026",
}) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
        borderRadius: "20px",
        padding: "30px 25px",
        marginBottom: "25px",
        border: "2px solid #fbcfe8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Декоративдик фон элементтери */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          fontSize: "5rem",
          opacity: 0.1,
          transform: "rotate(20deg)",
        }}
      >
        💕
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          left: "-30px",
          fontSize: "5rem",
          opacity: 0.1,
          transform: "rotate(-20deg)",
        }}
      >
        💕
      </div>

      <h3
        style={{
          textAlign: "center",
          color: "#be185d",
          fontSize: "1.3rem",
          fontWeight: "bold",
          marginBottom: "20px",
          fontFamily: "'Georgia', serif",
          position: "relative",
          zIndex: 1,
        }}
      >
        💑 Той ээлери
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Куйоо */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.5rem",
              margin: "0 auto 10px",
              boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
              border: "3px solid white",
            }}
          >
            {groomPhoto}
          </div>
          <div
            style={{
              fontWeight: "bold",
              color: "#1f2937",
              fontSize: "1.1rem",
            }}
          >
            {groomName}
          </div>
          <div
            style={{
              fontSize: "0.8rem",
              color: "#6b7280",
            }}
          >
            Куйоо
          </div>
        </div>

        {/* Жүрөкчө */}
        <div
          style={{
            fontSize: "2rem",
            color: "#ec4899",
            animation: "heartBeat 1.5s ease-in-out infinite",
          }}
        >
          ❤️
        </div>

        {/* Келин */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ec4899, #f472b6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.5rem",
              margin: "0 auto 10px",
              boxShadow: "0 4px 15px rgba(236, 72, 153, 0.3)",
              border: "3px solid white",
            }}
          >
            {bridePhoto}
          </div>
          <div
            style={{
              fontWeight: "bold",
              color: "#1f2937",
              fontSize: "1.1rem",
            }}
          >
            {brideName}
          </div>
          <div
            style={{
              fontSize: "0.8rem",
              color: "#6b7280",
            }}
          >
            Келин
          </div>
        </div>
      </div>

      {/* Той күнү */}
      <div
        style={{
          textAlign: "center",
          marginTop: "15px",
          padding: "8px 20px",
          background: "rgba(236, 72, 153, 0.1)",
          borderRadius: "50px",
          display: "inline-block",
          width: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ color: "#be185d", fontWeight: "600" }}>
          📅 Той күнү: {weddingDate}
        </span>
      </div>

      <style>
        {`
          @keyframes heartBeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
        `}
      </style>
    </div>
  );
};

export default CoupleInfo;
