import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LandingPage.module.css'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <main className={styles.root} style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', background: '#fbfb2' }}>
      
      {/* ========================================================= */}
      {/* --- PURE HTML/CSS SWACHH BHARAT ILLUSTRATED BACKGROUND --- */}
      {/* ========================================================= */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        
        {/* 1. Indian Tricolor (Tiranga) Swoop Banner - Top Right */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '650px',
          height: '350px',
          background: 'linear-gradient(135deg, rgba(255,153,51,0.25) 0%, rgba(255,153,51,0.2) 33%, rgba(255,255,255,0.4) 33%, rgba(255,255,255,0.4) 66%, rgba(19,136,8,0.2) 66%, rgba(19,136,8,0.25) 100%)',
          borderRadius: '40% 60% 30% 70% / 50% 30% 70% 50%',
          transform: 'rotate(-12deg)',
          filter: 'blur(8px)'
        }} />

        {/* Ashoka Chakra Graphic (Top Right inside Tricolor) */}
        <svg 
          width="120" height="120" viewBox="0 0 100 100" 
          style={{ position: 'absolute', top: '5%', right: '8%', opacity: 0.35 }}
        >
          <circle cx="50" cy="50" r="45" stroke="#000080" strokeWidth="2.5" fill="none" />
          <circle cx="50" cy="50" r="8" fill="#000080" />
          {[...Array(24)].map((_, i) => (
            <line 
              key={i} 
              x1="50" y1="50" 
              x2={50 + 45 * Math.cos((i * 15 * Math.PI) / 180)} 
              y2={50 + 45 * Math.sin((i * 15 * Math.PI) / 180)} 
              stroke="#000080" strokeWidth="1.5" 
            />
          ))}
        </svg>

        {/* 2. Gandhiji Watermark Illustration - Top Left */}
        <svg 
          width="320" height="280" viewBox="0 0 200 200" 
          style={{ position: 'absolute', top: '2%', left: '1%', opacity: 0.18 }}
        >
          {/* Head & Glasses outline */}
          <circle cx="100" cy="80" r="50" fill="none" stroke="#854d0e" strokeWidth="3" />
          <circle cx="75" cy="80" r="22" fill="none" stroke="#854d0e" strokeWidth="4" />
          <circle cx="125" cy="80" r="22" fill="none" stroke="#854d0e" strokeWidth="4" />
          <path d="M 97 80 Q 100 70 103 80" stroke="#854d0e" strokeWidth="4" fill="none" />
          <line x1="53" y1="80" x2="35" y2="72" stroke="#854d0e" strokeWidth="3" />
          <line x1="147" y1="80" x2="165" y2="72" stroke="#854d0e" strokeWidth="3" />
          {/* Shoulders */}
          <path d="M 40 170 Q 100 125 160 170" fill="none" stroke="#854d0e" strokeWidth="4" />
        </svg>

        {/* 3. City Skyline Silhouette (Bottom) */}
        <svg 
          width="100%" height="160" viewBox="0 0 1200 160" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.12 }}
        >
          <path d="M0 160 L0 120 L30 120 L30 90 L50 90 L50 120 L90 120 L90 70 L120 70 L120 120 L160 120 L180 50 L200 50 L210 120 L270 120 L270 80 L310 80 L310 120 L400 120 L420 40 L450 40 L470 120 L550 120 L550 60 L600 60 L600 120 L700 120 L720 30 L760 30 L780 120 L880 120 L880 75 L930 75 L930 120 L1050 120 L1070 50 L1100 50 L1120 120 L1200 120 L1200 160 Z" fill="#15803d" />
        </svg>

        {/* 4. Sanitation Green Trees & Worker Badges - Bottom Left & Right */}
        <div style={{ position: 'absolute', bottom: '3%', left: '3%', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '38px' }}>🧹</span>
          <span style={{ fontSize: '32px' }}>🌳</span>
          <span style={{ fontSize: '28px' }}>♻️</span>
        </div>

        <div style={{ position: 'absolute', bottom: '3%', right: '3%', opacity: 0.85, textAlign: 'right', color: '#16a34a' }}>
          <span style={{ fontSize: '32px' }}>🏛️</span>
          <div style={{ fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px' }}>एक कदम स्वच्छता की ओर</div>
        </div>

      </div>
      {/* ========================================================= */}

      <header className={styles.header} style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>♻</span>
          <span className={styles.logoText}>CivicClean <em>AI</em></span>
        </div>
      </header>

      <section className={styles.hero} style={{ position: 'relative', zIndex: 1 }}>
        <h1 className={styles.headline}>
          Cleaner cities,<br />smarter governance.
        </h1>
        <p className={styles.sub}>
          AI-powered civic issue reporting for citizens and intelligent
          task management for municipal teams — all in one platform.
        </p>

        <div className={styles.cards}>
          {/* Citizen card */}
          <button
            className={`${styles.card} ${styles.cardCitizen}`}
            onClick={() => navigate('/citizen')}
          >
            <span className={styles.cardIcon}>🏘️</span>
            <span className={styles.cardTitle}>Citizen Portal</span>
            <span className={styles.cardDesc}>
              Report issues, track resolutions,<br />and engage with your city.
            </span>
            <span className={styles.cardCta}>Enter Portal →</span>
          </button>

          {/* Admin card */}
          <button
            className={`${styles.card} ${styles.cardAdmin}`}
            onClick={() => navigate('/admin')}
          >
            <span className={styles.cardIcon}>🏛️</span>
            <span className={styles.cardTitle}>Municipal Admin</span>
            <span className={styles.cardDesc}>
              Manage reports, dispatch crews,<br />and monitor city health.
            </span>
            <span className={styles.cardCta}>Enter Dashboard →</span>
          </button>
        </div>
      </section>
    </main>
  )
}