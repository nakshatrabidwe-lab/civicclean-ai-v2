import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LandingPage.module.css'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <main className={styles.root} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div className={styles.blob1} aria-hidden />
      <div className={styles.blob2} aria-hidden />

      {/* --- SWACHH BHARAT WATERMARK OVERLAYS --- */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        
        {/* Gandhiji Spectacles (Top Left) */}
        <svg 
          width="220" height="100" viewBox="0 0 200 80" 
          style={{ position: 'absolute', top: '10%', left: '4%', opacity: 0.08, transform: 'rotate(-8deg)' }}
        >
          <circle cx="50" cy="40" r="30" stroke="#16a34a" strokeWidth="6" fill="none" />
          <circle cx="150" cy="40" r="30" stroke="#16a34a" strokeWidth="6" fill="none" />
          <path d="M 80 40 Q 100 25 120 40" stroke="#16a34a" strokeWidth="6" fill="none" />
          <line x1="20" y1="40" x2="0" y2="30" stroke="#16a34a" strokeWidth="5" />
          <line x1="180" y1="40" x2="200" y2="30" stroke="#16a34a" strokeWidth="5" />
        </svg>

        {/* Broom / Cleanliness Symbol (Top Right) */}
        <svg 
          width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.5"
          style={{ position: 'absolute', top: '12%', right: '5%', opacity: 0.08, transform: 'rotate(15deg)' }}
        >
          <path d="M19 3L5 17" strokeLinecap="round" />
          <path d="M3 21l3-1 2-2-4-4-1 3-1 4z" fill="#16a34a" />
          <path d="M14 4l6 6" strokeLinecap="round" />
        </svg>

        {/* Swachh Bharat Tagline Emblem (Bottom Right) */}
        <div style={{ position: 'absolute', bottom: '6%', right: '5%', opacity: 0.12, textAlign: 'center', color: '#15803d', fontWeight: 'bold' }}>
          <div style={{ fontSize: '26px' }}>👓</div>
          <span style={{ fontSize: '13px', letterSpacing: '1px' }}>एक कदम स्वच्छता की ओर</span>
        </div>

        {/* Municipal Shield Icon (Bottom Left) */}
        <svg 
          width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.5"
          style={{ position: 'absolute', bottom: '8%', left: '4%', opacity: 0.08 }}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v8M8 12h8" strokeLinecap="round" />
        </svg>
        
      </div>

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