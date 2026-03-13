"use client";

import { motion, useInView, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// ─── ScrollProgress ──────────────────────────────────────────────────────────

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 65,
        left: 0,
        right: 0,
        height: 3,
        background: "linear-gradient(90deg, #7c3aed, #8b5cf6, #a78bfa)",
        zIndex: 40,
      }}
    />
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 24px",
        height: 65,
        display: "flex",
        alignItems: "center",
        background: "rgba(2, 8, 23, 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px" }}>
          <span style={{ color: "#ffffff" }}>Vox</span>
          <span className="gradient-text">Ready</span>
        </div>
        <button
          onClick={scrollToWaitlist}
          style={{
            padding: "8px 20px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 600,
            color: "#ffffff",
            background: "linear-gradient(135deg, #6d28d9, #5b21b6)",
            border: "1px solid rgba(124, 58, 237, 0.4)",
            boxShadow: "0 0 20px rgba(124, 58, 237, 0.25)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 0 30px rgba(124, 58, 237, 0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 0 20px rgba(124, 58, 237, 0.25)";
          }}
        >
          Rejoindre la bêta
        </button>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
  });

  return (
    <section
      style={{
        paddingTop: 120,
        paddingBottom: 80,
        paddingLeft: 24,
        paddingRight: 24,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 800,
            borderRadius: "50%",
            opacity: 0.08,
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 896, margin: "0 auto", position: "relative" }}>
        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              color: "#c4b5fd",
              background: "rgba(109, 40, 217, 0.15)",
              border: "1px solid rgba(109, 40, 217, 0.4)",
              marginBottom: 28,
            }}
          >
            🇫🇷 En Bêta
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.1)}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: 24,
            letterSpacing: "-1px",
          }}
        >
          Êtes-vous{" "}
          <span className="gradient-text">VoxReady</span>{" "}
          ?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#94a3b8",
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 auto 40px",
          }}
        >
          Simulez un vrai entretien téléphonique avec une IA recruteur.
          Entraînez-vous. Progressez. Décrochez le poste.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 56,
          }}
        >
          <button
            onClick={scrollToWaitlist}
            style={{
              padding: "14px 28px",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 700,
              color: "#ffffff",
              background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(124, 58, 237, 0.35)",
              transition: "all 0.2s",
            }}
          >
            Commencer l&apos;entraînement →
          </button>
          <button
            style={{
              padding: "14px 28px",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 600,
              color: "#a78bfa",
              background: "transparent",
              border: "1px solid rgba(167, 139, 250, 0.35)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            Voir la démo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.4)}
          style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "12 min", label: "entretien" },
            { value: "4 modes", label: "" },
            { value: "100%", label: "IA vocale" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#ffffff",
                }}
              >
                {stat.value}
              </div>
              {stat.label && (
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>
                  {stat.label}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── HowItWorks ───────────────────────────────────────────────────────────────

function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-80px", once: true });

  const steps = [
    {
      icon: "🎯",
      num: "01",
      title: "Choisissez votre mode",
      desc: "Sélectionnez le type d'entretien adapté à votre situation : découverte, technique, motivation ou pression.",
    },
    {
      icon: "📞",
      num: "02",
      title: "Entretien en direct",
      desc: "Sophie, votre IA recruteur, vous appelle. Conversation vocale réelle, 100% immersive, en temps réel.",
    },
    {
      icon: "📊",
      num: "03",
      title: "Recevez votre VoxScore",
      desc: "Analyse détaillée : communication, structure, confiance, pertinence. Des axes d'amélioration concrets.",
    },
  ];

  return (
    <section
      ref={ref}
      style={{ padding: "80px 24px", position: "relative" }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 12,
            }}
          >
            Comment ça marche ?
          </h2>
          <p style={{ color: "#64748b", fontSize: 16 }}>
            Trois étapes, un entretien transformé.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card"
              style={{
                borderRadius: 16,
                padding: 28,
                border: "1px solid rgba(124, 58, 237, 0.15)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#7c3aed",
                  letterSpacing: "2px",
                  marginBottom: 12,
                }}
              >
                {step.num}
              </div>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{step.icon}</div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 10,
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Modes ────────────────────────────────────────────────────────────────────

function Modes() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-80px", once: true });

  const modes = [
    {
      icon: "🌱",
      title: "Découverte",
      desc: "Premier contact avec un recruteur. Parlez de vous, de vos motivations, de votre parcours.",
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.08)",
      border: "rgba(16, 185, 129, 0.2)",
    },
    {
      icon: "🔥",
      title: "Motivation",
      desc: "Pourquoi ce poste ? Pourquoi cette entreprise ? Convainquez Sophie de votre engagement.",
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.08)",
      border: "rgba(245, 158, 11, 0.2)",
    },
    {
      icon: "💻",
      title: "Technique",
      desc: "Questions précises sur vos compétences. Démontrez votre expertise avec clarté et précision.",
      color: "#3b82f6",
      bg: "rgba(59, 130, 246, 0.08)",
      border: "rgba(59, 130, 246, 0.2)",
    },
    {
      icon: "⚡",
      title: "Pression",
      desc: "Gestion du stress, questions pièges, délais courts. Pour ceux qui veulent un vrai challenge.",
      color: "#ef4444",
      bg: "rgba(239, 68, 68, 0.08)",
      border: "rgba(239, 68, 68, 0.2)",
    },
  ];

  return (
    <section
      ref={ref}
      style={{ padding: "80px 24px", background: "rgba(255,255,255,0.01)" }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 12,
            }}
          >
            4 modes d&apos;entraînement
          </h2>
          <p style={{ color: "#64748b", fontSize: 16 }}>
            Adapté à chaque étape de votre préparation.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              style={{
                borderRadius: 16,
                padding: 28,
                background: mode.bg,
                border: `1px solid ${mode.border}`,
                cursor: "default",
                transition: "box-shadow 0.2s",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 14 }}>{mode.icon}</div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: mode.color,
                  marginBottom: 10,
                }}
              >
                {mode.title}
              </h3>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.65 }}>
                {mode.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── VoxScore ─────────────────────────────────────────────────────────────────

function VoxScore() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-80px", once: true });

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const scoreValue = 87;
  const offset = circumference - (scoreValue / 100) * circumference;

  const bars = [
    { label: "Communication", value: 90, color: "#3b82f6" },
    { label: "Structure", value: 82, color: "#818cf8" },
    { label: "Confiance", value: 88, color: "#06b6d4" },
    { label: "Pertinence", value: 85, color: "#10b981" },
  ];

  return (
    <section ref={ref} style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 12,
            }}
          >
            Votre VoxScore
          </h2>
          <p style={{ color: "#64748b", fontSize: 16 }}>
            Une analyse précise de votre performance vocale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card"
          style={{
            maxWidth: 520,
            margin: "0 auto",
            borderRadius: 20,
            padding: "40px 36px",
            border: "1px solid rgba(124, 58, 237, 0.2)",
          }}
        >
          {/* Circular score */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 36,
            }}
          >
            <div style={{ position: "relative", width: 140, height: 140 }}>
              <svg width={140} height={140} style={{ transform: "rotate(-90deg)" }}>
                <circle
                  cx={70}
                  cy={70}
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth={10}
                />
                <motion.circle
                  cx={70}
                  cy={70}
                  r={radius}
                  fill="none"
                  stroke="url(#scoreGrad)"
                  strokeWidth={10}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={isInView ? { strokeDashoffset: offset } : {}}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
              </svg>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{ fontSize: 32, fontWeight: 900, color: "#ffffff" }}
                >
                  {scoreValue}
                </span>
                <span style={{ fontSize: 12, color: "#64748b" }}>/100</span>
              </div>
            </div>
          </div>

          {/* Progress bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {bars.map((bar, i) => (
              <div key={i}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 7,
                  }}
                >
                  <span style={{ fontSize: 13, color: "#94a3b8" }}>
                    {bar.label}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: bar.color,
                    }}
                  >
                    {bar.value}%
                  </span>
                </div>
                <div
                  style={{
                    height: 6,
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.05)",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: `${bar.value}%` } : {}}
                    transition={{
                      duration: 0.9,
                      delay: 0.4 + i * 0.1,
                      ease: "easeOut",
                    }}
                    style={{
                      height: "100%",
                      borderRadius: 999,
                      background: bar.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Waitlist ─────────────────────────────────────────────────────────────────

type WaitlistState = "idle" | "loading" | "success" | "error";

function Waitlist() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-80px", once: true });
  const [email, setEmail] = useState("");
  const [state, setState] = useState<WaitlistState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setState("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Une erreur est survenue.");
        setState("error");
      }
    } catch {
      setErrorMsg("Impossible de contacter le serveur.");
      setState("error");
    }
  };

  return (
    <section
      id="waitlist"
      ref={ref}
      style={{ padding: "80px 24px", position: "relative" }}
    >
      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 600,
            height: 300,
            borderRadius: "50%",
            opacity: 0.06,
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div style={{ maxWidth: 1024, margin: "0 auto", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 12,
            }}
          >
            Rejoignez la bêta
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
            Soyez parmi les premiers à tester VoxReady. Accès gratuit pendant la bêta.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card"
          style={{
            maxWidth: 480,
            margin: "0 auto",
            borderRadius: 20,
            padding: "32px 28px",
            border: "1px solid rgba(124, 58, 237, 0.2)",
          }}
        >
          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "16px 0" }}
              >
                <div style={{ fontSize: 40, marginBottom: 14 }}>✅</div>
                <p style={{ color: "#10b981", fontSize: 16, fontWeight: 600 }}>
                  Vous êtes sur la liste !
                </p>
                <p style={{ color: "#64748b", fontSize: 14, marginTop: 8 }}>
                  Nous vous contacterons dès l&apos;ouverture de la bêta.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#ffffff",
                    fontSize: 15,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                {state === "error" && (
                  <p style={{ color: "#ef4444", fontSize: 13 }}>{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={state === "loading"}
                  style={{
                    padding: "13px 24px",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#ffffff",
                    background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                    border: "none",
                    cursor: state === "loading" ? "not-allowed" : "pointer",
                    opacity: state === "loading" ? 0.75 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    transition: "all 0.2s",
                  }}
                >
                  {state === "loading" ? (
                    <>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        style={{ animation: "spin 0.8s linear infinite" }}
                      >
                        <circle
                          cx={12}
                          cy={12}
                          r={10}
                          strokeOpacity={0.25}
                        />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Envoi…
                    </>
                  ) : (
                    "Rejoindre la liste →"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        padding: "28px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#334155", fontSize: 13 }}>
        VoxReady © 2026 — Propulsé par{" "}
        <span style={{ color: "#4b5563" }}>Groq · ElevenLabs · LiveKit</span>
      </p>
      <div
        style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <a
          href="https://lentretientelephonique.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#475569", fontSize: 13, textDecoration: "none" }}
        >
          lentretientelephonique.com
        </a>
        <a
          href="/politique-de-confidentialite"
          style={{ color: "#475569", fontSize: 13, textDecoration: "none" }}
        >
          Politique de confidentialité
        </a>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main style={{ position: "relative", overflowX: "hidden" }}>
      <ScrollProgress />
      <Nav />
      <Hero />
      <HowItWorks />
      <Modes />
      <VoxScore />
      <Waitlist />
      <Footer />
    </main>
  );
}
