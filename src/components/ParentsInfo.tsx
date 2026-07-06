import React from "react";

interface ParentsProps {
  groomFather?: string;
  groomMother?: string;
  brideFather?: string;
  brideMother?: string;
  backgroundImage?: string;
}

const ParentsInfo: React.FC<ParentsProps> = ({
  groomFather = "Нурбектин атасы - Асан",
  groomMother = "Нурбектин апасы - Гүлнара",
  brideFather = "Айжандын атасы - Мирлан",
  brideMother = "Айжандын апасы - Жыпар",
  backgroundImage = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Караңгы фильтр (текст окулушу үчүн) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Контент */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "30px",
          padding: "50px 40px",
          maxWidth: "650px",
          width: "100%",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {/* Декоративдик элементтер */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "10px" }}>👨‍👩‍👧‍👦</div>
          <h2
            style={{
              color: "#1f2937",
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Урматтуу ата-энелер!
          </h2>
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(to right, #fbbf24, #f59e0b)",
              margin: "10px auto",
              borderRadius: "2px",
            }}
          />
          <p
            style={{
              color: "#6b7280",
              fontSize: "1rem",
              marginTop: "10px",
            }}
          >
            Сиздерди уулубуз менен кызыбыздын тойунда көрүүгө кубанычтабыз!
          </p>
        </div>

        {/* Ата-энелер */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {/* Куйоонун ата-энеси */}
          <div
            style={{
              background: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
              border: "2px solid #93c5fd",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>👨‍👩‍👦</div>
            <h4
              style={{
                color: "#1e40af",
                fontSize: "1rem",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Куйоонун ата-энеси
            </h4>
            <div
              style={{
                fontSize: "0.95rem",
                color: "#1f2937",
                fontWeight: "500",
              }}
            >
              {groomFather}
            </div>
            <div
              style={{
                fontSize: "0.95rem",
                color: "#1f2937",
                fontWeight: "500",
                marginTop: "5px",
              }}
            >
              {groomMother}
            </div>
          </div>

          {/* Келиндин ата-энеси */}
          <div
            style={{
              background: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
              border: "2px solid #f9a8d4",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>👨‍👩‍👧</div>
            <h4
              style={{
                color: "#be185d",
                fontSize: "1rem",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Келиндин ата-энеси
            </h4>
            <div
              style={{
                fontSize: "0.95rem",
                color: "#1f2937",
                fontWeight: "500",
              }}
            >
              {brideFather}
            </div>
            <div
              style={{
                fontSize: "0.95rem",
                color: "#1f2937",
                fontWeight: "500",
                marginTop: "5px",
              }}
            >
              {brideMother}
            </div>
          </div>
        </div>

        {/* Той маалыматы */}
        <div
          style={{
            background: "linear-gradient(135deg, #fef3c7, #fde68a)",
            borderRadius: "12px",
            padding: "15px 20px",
            textAlign: "center",
            border: "2px solid #fcd34d",
          }}
        >
          <div
            style={{
              color: "#92400e",
              fontSize: "0.95rem",
              fontWeight: "600",
            }}
          >
            📅 Той күнү: 15-август 2026 | ⏰ 18:00
          </div>
          <div
            style={{
              color: "#92400e",
              fontSize: "0.9rem",
              marginTop: "5px",
            }}
          >
            📍 "Ак-Куу" рестораны, Бишкек
          </div>
        </div>

        {/* Кошумча текст */}
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "0.85rem",
            marginTop: "20px",
            fontStyle: "italic",
          }}
        >
          "Балдарыбыздын бактылуу келечеги үчүн!"
        </p>
      </div>
    </div>
  );
};

export default ParentsInfo;
