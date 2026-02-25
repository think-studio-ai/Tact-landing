import React, { useEffect, useState } from "react";

const styles = `
  .hero {
    position: relative;
    height: 100vh;
    min-height: 700px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(to bottom,
        rgba(6,6,6,0.25) 0%,
        rgba(6,6,6,0.05) 35%,
        rgba(6,6,6,0.70) 75%,
        rgba(6,6,6,1) 100%),
      url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1900&q=85&fit=crop');
    background-size: cover;
    background-position: center 30%;
    transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .hero-bg.loaded { transform: scale(1); }
  .hero-bg.loading { transform: scale(1.07); }

  .hero-content {
    position: relative; z-index: 2;
    width: 100%; max-width: 1400px;
    margin: 0 auto;
    padding: 0 60px 110px;
    transition: opacity 1.1s ease 0.5s, transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.5s;
  }
  .hero-content.loaded { opacity: 1; transform: translateY(0); }
  .hero-content.loading { opacity: 0; transform: translateY(28px); }

  .hero-eyebrow {
    font-family: 'Raleway', sans-serif;
    font-size: 10px; font-weight: 500;
    letter-spacing: 7px; text-transform: uppercase;
    color: #DDB96E;
    margin-bottom: 22px;
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(40px, 6vw, 84px);
    font-weight: 500;
    line-height: 1.08;
    color: #F2EDE4;
    max-width: 780px;
    margin-bottom: 38px;
  }
  .hero-title em {
    font-style: italic;
    color: #DDB96E;
  }
  .hero-rule {
    width: 72px; height: 1px;
    background: linear-gradient(90deg, #C09A5B, transparent);
    margin-bottom: 30px;
  }
  .hero-quote {
    font-family: 'Playfair Display', serif;
    font-size: clamp(14px, 1.4vw, 18px);
    font-style: italic;
    font-weight: 400;
    color: rgba(242,237,228,0.65);
    max-width: 500px;
    line-height: 1.9;
  }
  .hero-quote cite {
    display: block;
    margin-top: 18px;
    font-style: normal;
    font-family: 'Raleway', sans-serif;
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #C09A5B;
    font-weight: 600;
  }
  .hero-scroll-indicator {
    position: absolute;
    bottom: 44px; right: 60px;
    display: flex; flex-direction: column;
    align-items: center; gap: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 9px; letter-spacing: 5px;
    text-transform: uppercase;
    color: rgba(242,237,228,0.35);
  }
  .hero-scroll-indicator::after {
    content: '';
    width: 1px; height: 64px;
    background: linear-gradient(to bottom, #C09A5B, transparent);
    animation: scrollPulse 2.2s ease-in-out infinite;
  }
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.25; transform: scaleY(0.5); transform-origin: top; }
    60% { opacity: 1; transform: scaleY(1); }
  }
  @media (max-width: 640px) {
    .hero-content { padding: 0 24px 80px; }
    .hero-scroll-indicator { display: none; }
  }
`;

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);
  const cls = loaded ? "loaded" : "loading";

  return (
    <>
      <style>{styles}</style>
      <section className="hero">
        <div className={`hero-bg ${cls}`} />
        <div className={`hero-content ${cls}`}>
          <p className="hero-eyebrow">Est. 2010 · Cairo, Egypt</p>
          <h1 className="hero-title">
            Tact
            <br />
            <em>Innovations</em>
            <br />
          </h1>
          <div className="hero-rule" />
          <blockquote className="hero-quote">
            At Tact Innovations Design & General Contracting, we shape the
            future of living spaces through innovative, sustainable, and
            aesthetic architecture. Our experienced team delivers exceptional
            residential, commercial, and urban projects with creativity and
            precision. We don’t just build structures — we create lasting
            legacies for the future.
            <cite>— Chairman, Tact Innovations</cite>
          </blockquote>
        </div>
        <div className="hero-scroll-indicator">Scroll</div>
      </section>
    </>
  );
}
