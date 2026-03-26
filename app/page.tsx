"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#020817",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>
      {/* Logo */}
      <div style={{
        fontSize: 22,
        fontWeight: 700,
        color: "#f8fafc",
        letterSpacing: "-0.02em",
        marginBottom: 40,
      }}>
        Vox<span style={{ color: "#7c3aed" }}>Ready</span>
      </div>

      {/* Badge */}
      <div style={{
        background: "rgba(124, 58, 237, 0.15)",
        border: "1px solid rgba(124, 58, 237, 0.4)",
        borderRadius: 999,
        padding: "6px 16px",
        fontSize: 12,
        fontWeight: 600,
        color: "#a78bfa",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: 32,
      }}>
        Accès anticipé
      </div>

      {/* Title */}
      <h1 style={{
        fontSize: "clamp(28px, 6vw, 52px)",
        fontWeight: 700,
        color: "#f8fafc",
        textAlign: "center",
        lineHeight: 1.15,
        margin: "0 0 20px",
        maxWidth: 680,
      }}>
        Qualifiez vos candidats<br />
        <span style={{ color: "#7c3aed" }}>sans décrocher le téléphone</span>
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: "clamp(15px, 2.5vw, 18px)",
        color: "#94a3b8",
        textAlign: "center",
        maxWidth: 540,
        lineHeight: 1.7,
        margin: "0 0 16px",
      }}>
        VoxReady est une IA recruteur vocale qui conduit vos entretiens téléphoniques de présélection, 
        les note selon la méthode STAR et vous livre un rapport détaillé par candidat.
      </p>

      {/* Stats */}
      <div style={{
        display: "flex",
        gap: 32,
        marginBottom: 48,
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {[
          { v: "-80%", l: "de temps en screening" },
          { v: "24h", l: "délai qualification" },
          { v: "RGPD", l: "souveraineté EU" },
        ].map(({ v, l }) => (
          <div key={v} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#7c3aed" }}>{v}</div>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Form */}
      {status === "success" ? (
        <div style={{
          background: "rgba(34, 197, 94, 0.1)",
          border: "1px solid rgba(34, 197, 94, 0.3)",
          borderRadius: 12,
          padding: "20px 32px",
          color: "#4ade80",
          fontSize: 16,
          fontWeight: 500,
          textAlign: "center",
        }}>
          ✓ Vous êtes sur la liste. On vous contacte en priorité.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: 480,
        }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="recruteur@entreprise.fr"
            required
            style={{
              flex: 1,
              minWidth: 240,
              padding: "14px 18px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              color: "#f8fafc",
              fontSize: 15,
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "14px 28px",
              borderRadius: 10,
              background: status === "loading" ? "#4c1d95" : "#7c3aed",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              border: "none",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
          >
            {status === "loading" ? "..." : "Accès anticipé"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p style={{ color: "#f87171", fontSize: 13, marginTop: 12 }}>
          Une erreur est survenue, réessayez.
        </p>
      )}

      {/* Footer */}
      <p style={{
        color: "#334155",
        fontSize: 12,
        marginTop: 48,
        textAlign: "center",
      }}>
        Propulsé par Mistral AI · LiveKit · Souveraineté européenne
      </p>
    </div>
  );
}
