import React from "react";
import { Reveal } from "../../utils/Reveal";

const services = [
  {
    symbol: "⬡",
    title: "3D Design & Visualization",
    desc: "Photo-realistic renders and immersive 3D walkthroughs that bring your vision to life before a single brick is laid.",
  },
  {
    symbol: "⬠",
    title: "On Ground Construction",
    desc: "Full-scale construction management with precision engineering, quality materials, and guaranteed on-time delivery.",
  },
  {
    symbol: "⬟",
    title: "Transportation & Supplies",
    desc: "Comprehensive logistics solutions ensuring your materials and equipment arrive safely and precisely on schedule.",
  },
  {
    symbol: "◈",
    title: "Interior Architecture",
    desc: "Sophisticated interior design that merges functionality with refined aesthetic sensibility and timeless elegance.",
  },
];

const styles = `
  .svc-section {
    background: var(--dark);
    padding: 130px 60px;
  }
  .svc-inner { max-width: 1400px; margin: 0 auto; }
  .svc-grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1px;
    background: rgba(192,154,91,0.08);
    margin-top: 64px;
  }
  .svc-card {
    background: var(--dark);
    padding: 68px 56px;
    position: relative; overflow: hidden;
    transition: background 0.4s ease;
    cursor: pointer;
  }
  .svc-card::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, #C09A5B, transparent);
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  }
  .svc-card:hover::before { transform: scaleX(1); }
  .svc-card:hover { background: rgba(192,154,91,0.025); }
  .svc-symbol {
    display: block;
    font-size: 28px;
    color: rgba(192,154,91,0.35);
    margin-bottom: 28px;
    transition: color 0.35s, transform 0.35s;
  }
  .svc-card:hover .svc-symbol { color: #C09A5B; transform: scale(1.1); }
  .svc-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px; font-weight: 500;
    color: var(--text);
    margin-bottom: 18px;
    line-height: 1.3;
  }
  .svc-desc {
    font-family: 'Lato', sans-serif;
    font-size: 14px; font-weight: 300;
    line-height: 2.1; color: rgba(242,237,228,0.50);
  }
  .svc-link {
    display: inline-flex; align-items: center; gap: 10px;
    margin-top: 30px;
    font-family: 'Raleway', sans-serif;
    font-size: 10px; letter-spacing: 3px;
    text-transform: uppercase; color: #C09A5B; font-weight: 600;
    opacity: 0; transform: translateX(-10px);
    transition: opacity 0.35s, transform 0.35s;
  }
  .svc-link::after { content: '→'; font-size: 13px; }
  .svc-card:hover .svc-link { opacity: 1; transform: translateX(0); }
  @media (max-width: 1024px) { .svc-grid { grid-template-columns: 1fr; } .svc-section { padding: 90px 40px; } }
  @media (max-width: 640px)  { .svc-section { padding: 80px 24px; } .svc-card { padding: 48px 28px; } }
`;

export default function ServicesSection() {
  return (
    <>
      <style>{styles}</style>
      <section className="svc-section">
        <div className="svc-inner">
          <Reveal>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">
              Our <em>Services</em>
            </h2>
          </Reveal>

          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="svc-card">
                  <span className="svc-symbol">{s.symbol}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  <span className="svc-link">Explore</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
