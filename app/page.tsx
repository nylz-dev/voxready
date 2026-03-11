"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ background: "rgba(2, 8, 23, 0.8)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">
          <span className="text-white">Vox</span>
          <span className="gradient-text">Ready</span>
        </div>
        <button
          onClick={scrollToWaitlist}
          className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
            border: "1px solid rgba(59, 130, 246, 0.4)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.25)",
          }}
        >
          Rejoindre la bêta
        </button>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }} />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "rgba(59, 130, 246, 0.1)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            color: "#93c5fd",
          }}
        >
          <span>🎙️</span>
          <span>Now in Beta</span>
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
        >
          <span className="text-white">Are you </span>
          <span className="gradient-text">VoxReady</span>
          <span className="text-white">?</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Simulez un vrai entretien téléphonique avec une IA recruteur.{" "}
          <span className="text-slate-300">Entraînez-vous.</span>{" "}
          <span className="text-slate-300">Progressez.</span>{" "}
          <span className="text-white font-semibold">Décrochez le poste.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://lentretientelephonique.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.4), 0 4px 15px rgba(59, 130, 246, 0.2)",
            }}
          >
            Commencer l&apos;entraînement →
          </a>
          <button
            className="px-8 py-4 rounded-xl text-slate-300 font-semibold text-lg transition-all duration-200 hover:text-white hover:border-blue-500/50"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            Voir la démo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
        >
          {[
            { value: "12 min", label: "entretien complet" },
            { value: "4 modes", label: "de difficulté" },
            { value: "100%", label: "IA vocale" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-blue-400" />
        </div>
      </motion.div>
    </section>
  );
}

// ─── How it works ────────────────────────────────────────────────────────────

function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: "👤",
      title: "Choisissez votre profil",
      desc: "Poste visé, secteur d'activité, niveau d'expérience. L'IA adapte l'entretien à votre cible.",
    },
    {
      number: "02",
      icon: "🎙️",
      title: "Parlez à Sophie",
      desc: "L'IA recruteur analyse votre discours en temps réel : rythme, clarté, arguments, hésitations.",
    },
    {
      number: "03",
      icon: "📊",
      title: "Recevez votre VoxScore",
      desc: "Rapport détaillé, points forts identifiés, axes d'amélioration concrets. Partageable sur LinkedIn.",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Comment ça marche</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Simple. Immersif.{" "}
            <span className="gradient-text">Efficace.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }} />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:border-blue-500/30"
                  style={{ borderColor: "rgba(59, 130, 246, 0.1)" }}>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-5xl font-black text-blue-500/20 mb-4 font-mono">{step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Modes ───────────────────────────────────────────────────────────────────

function Modes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const modes = [
    {
      icon: "🤝",
      title: "Recruteur Bienveillant",
      tag: "Standard",
      desc: "Questions classiques, rythme confortable. Idéal pour commencer.",
      color: "#22c55e",
      bg: "rgba(34, 197, 94, 0.08)",
      border: "rgba(34, 197, 94, 0.2)",
    },
    {
      icon: "🧐",
      title: "L'Agressif",
      tag: "Pour les forts de café",
      desc: "Questions pièges, interruptions, pression maximale. Pas pour les âmes sensibles.",
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.08)",
      border: "rgba(245, 158, 11, 0.2)",
    },
    {
      icon: "💻",
      title: "Le Lead Technique",
      tag: "Questions pointues",
      desc: "Compétences techniques, cas pratiques, profondeur d'expertise. Pour les profils tech.",
      color: "#3b82f6",
      bg: "rgba(59, 130, 246, 0.08)",
      border: "rgba(59, 130, 246, 0.2)",
    },
    {
      icon: "💀",
      title: "Mode Hardcore",
      tag: "Pour les âmes courageuses",
      desc: "Le summum. Tout à la fois. Si tu passes ça, tu passes tout.",
      color: "#ef4444",
      bg: "rgba(239, 68, 68, 0.08)",
      border: "rgba(239, 68, 68, 0.2)",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Modes d&apos;entraînement</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Choisissez votre{" "}
            <span className="gradient-text">niveau de défi</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl p-6 cursor-pointer transition-all duration-300"
              style={{ background: mode.bg, border: `1px solid ${mode.border}`, backdropFilter: "blur(10px)" }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{mode.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{mode.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: `${mode.color}22`, color: mode.color, border: `1px solid ${mode.color}44` }}>
                      {mode.tag}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{mode.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── VoxScore Teaser ─────────────────────────────────────────────────────────

function VoxScoreTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const subScores = [
    { label: "Communication", score: 88, color: "#3b82f6" },
    { label: "Structure", score: 75, color: "#818cf8" },
    { label: "Confiance", score: 82, color: "#06b6d4" },
    { label: "Pertinence", score: 91, color: "#10b981" },
  ];

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (82 / 100) * circumference;

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Votre rapport</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Votre <span className="gradient-text">VoxScore</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Chaque entretien génère un rapport complet. Voyez où vous excellez, ce qui freine votre progression.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-10 blue-glow">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-white font-bold text-lg">Entretien — Développeur Frontend</h3>
                <p className="text-slate-500 text-sm mt-1">Mode Recruteur Bienveillant · 12 min 34s</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", border: "1px solid rgba(34, 197, 94, 0.3)" }}>
                ✓ Partageable sur LinkedIn
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Circular score */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative w-36 h-36">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                    <motion.circle
                      cx="60" cy="60" r="54"
                      fill="none"
                      stroke="url(#scoreGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={inView ? { strokeDashoffset: offset } : {}}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-white">82</span>
                    <span className="text-slate-400 text-sm">/100</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mt-3">VoxScore Global</p>
              </div>

              {/* Sub scores */}
              <div className="flex-1 w-full space-y-4">
                {subScores.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-slate-300">{item.label}</span>
                      <span className="text-sm font-semibold text-white">{item.score}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.score}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                        style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}99)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Waitlist ─────────────────────────────────────────────────────────────────

function Waitlist() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Une erreur est survenue");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible de vous inscrire. Réessayez.");
    }
  };

  return (
    <section id="waitlist" ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Accès anticipé</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Prêt à décrocher votre{" "}
            <span className="gradient-text">prochain poste ?</span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Rejoignez les premiers à accéder à VoxReady et transformez votre façon de vous préparer.
          </p>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-8"
                style={{ border: "1px solid rgba(34, 197, 94, 0.3)" }}
              >
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-xl font-bold text-white mb-2">Vous êtes sur la liste !</h3>
                <p className="text-slate-400">On vous contacte dès que VoxReady est prêt. Préparez-vous. 🎙️</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8"
                style={{ border: "1px solid rgba(59, 130, 246, 0.2)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                    disabled={status === "loading"}
                    className="flex-1 px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 transition-all"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || !email}
                    className="px-6 py-3 rounded-xl text-white font-bold transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.35)",
                    }}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Un instant...
                      </span>
                    ) : (
                      "Rejoindre la bêta →"
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}
                <p className="text-slate-500 text-sm">
                  🔒 Gratuit pendant la bêta. Aucune CB requise.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-8 px-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm text-center md:text-left">
          <span className="text-white font-semibold">Vox<span className="text-blue-400">Ready</span></span>{" "}
          © 2026 — Propulsé par Gemini 3 Flash · ElevenLabs · LiveKit
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://lentretientelephonique.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            lentretientelephonique.com
          </a>
          <span className="text-slate-700">|</span>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <Modes />
      <VoxScoreTeaser />
      <Waitlist />
      <Footer />
    </main>
  );
}
