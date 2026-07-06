import React from "react";

const WeddingAddress: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "30px",
          padding: "50px 40px",
          maxWidth: "550px",
          width: "100%",
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          border: "2px solid #e8d5b7",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Декоративдик элементтер */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "150px",
            height: "150px",
            background: "radial-gradient(circle, #fbbf24, transparent)",
            opacity: 0.1,
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "-50px",
            width: "150px",
            height: "150px",
            background: "radial-gradient(circle, #f472b6, transparent)",
            opacity: 0.1,
            borderRadius: "50%",
          }}
        />

        {/* Башкы бөлүк */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>💍</div>
          <h1
            style={{
              color: "#7c3aed",
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              fontFamily: "'Georgia', serif",
            }}
          >
            Тойго чакыруу
          </h1>
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(to right, #f472b6, #7c3aed)",
              margin: "0 auto 20px",
              borderRadius: "2px",
            }}
          />
          <p
            style={{
              color: "#6b7280",
              fontSize: "1.1rem",
              marginBottom: "30px",
              lineHeight: "1.6",
            }}
          >
            Сизди биздин бактылуу күнүбүзгө чакырабыз!
            <br />
            <span style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
              Биз менен кошо кубанууга келиңиз
            </span>
          </p>
        </div>

        {/* Форма */}
        <form style={{ position: "relative", zIndex: 1 }}>
          {/* Ресторан */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                color: "#374151",
                marginBottom: "0.5rem",
                fontWeight: "600",
                fontSize: "0.95rem",
              }}
            >
              🏛️ Ресторан
            </label>
            <div
              style={{
                padding: "14px 16px",
                background: "#f9fafb",
                borderRadius: "12px",
                border: "2px solid #e5e7eb",
                color: "#374151",
                fontSize: "1rem",
              }}
            >
              <span style={{ fontWeight: "500" }}>"Ак-Куу" рестораны</span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  color: "#6b7280",
                  marginTop: "4px",
                }}
              >
                📍 Бишкек, Чуй проспектиси 123
              </span>
            </div>
          </div>

          {/* Дата */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                color: "#374151",
                marginBottom: "0.5rem",
                fontWeight: "600",
                fontSize: "0.95rem",
              }}
            >
              📅 Күн
            </label>
            <div
              style={{
                padding: "14px 16px",
                background: "#f9fafb",
                borderRadius: "12px",
                border: "2px solid #e5e7eb",
                color: "#374151",
                fontSize: "1rem",
              }}
            >
              <span style={{ fontWeight: "500" }}>15-август 2026</span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  color: "#6b7280",
                  marginTop: "4px",
                }}
              >
                📆 Шейшемби күнү
              </span>
            </div>
          </div>

          {/* Убакыт */}
          <div style={{ marginBottom: "2rem" }}>
            <label
              style={{
                display: "block",
                color: "#374151",
                marginBottom: "0.5rem",
                fontWeight: "600",
                fontSize: "0.95rem",
              }}
            >
              ⏰ Убакыт
            </label>
            <div
              style={{
                padding: "14px 16px",
                background: "#f9fafb",
                borderRadius: "12px",
                border: "2px solid #e5e7eb",
                color: "#374151",
                fontSize: "1rem",
              }}
            >
              <span style={{ fontWeight: "500" }}>18:00</span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  color: "#6b7280",
                  marginTop: "4px",
                }}
              >
                🕐 Кечки саат 6да
              </span>
            </div>
          </div>

          {/* 2 кнопка */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              style={{
                flex: 1,
                padding: "16px 30px",
                fontSize: "1rem",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
                minWidth: "150px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 6px 25px rgba(124, 58, 237, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(124, 58, 237, 0.3)";
              }}
            >
              ✅ Келем
            </button>

            <button
              type="button"
              style={{
                flex: 1,
                padding: "16px 30px",
                fontSize: "1rem",
                fontWeight: "bold",
                background: "white",
                color: "#7c3aed",
                border: "2px solid #7c3aed",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "150px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f5f3ff";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ❌ Келе албайм
            </button>
          </div>

          {/* Кошумча маалымат */}
          <p
            style={{
              textAlign: "center",
              color: "#9ca3af",
              fontSize: "0.8rem",
              marginTop: "20px",
            }}
          >
            📞 Суроолор болсо: +996 700 123 456
          </p>
        </form>

        {/* Декоративдик бурчтар */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            width: "30px",
            height: "30px",
            borderTop: "3px solid #e8d5b7",
            borderLeft: "3px solid #e8d5b7",
            borderRadius: "4px 0 0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            width: "30px",
            height: "30px",
            borderTop: "3px solid #e8d5b7",
            borderRight: "3px solid #e8d5b7",
            borderRadius: "0 4px 0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            left: "15px",
            width: "30px",
            height: "30px",
            borderBottom: "3px solid #e8d5b7",
            borderLeft: "3px solid #e8d5b7",
            borderRadius: "0 0 0 4px",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
            width: "30px",
            height: "30px",
            borderBottom: "3px solid #e8d5b7",
            borderRight: "3px solid #e8d5b7",
            borderRadius: "0 0 4px 0",
          }}
        />
      </div>
    </div>
  );
};

export default WeddingAddress;
