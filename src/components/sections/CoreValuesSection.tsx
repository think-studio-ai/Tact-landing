import React from "react";
import { Reveal } from "../../utils/Reveal";

const values = [
  {
    symbol: "◈",
    title: "Excellence",
    desc: "We pursue the highest standards in every project, from concept to delivery, ensuring outstanding results that endure.",
  },
  {
    symbol: "◇",
    title: "Integrity",
    desc: "Transparent, honest partnerships built on trust and accountability with every client and stakeholder we work with.",
  },
  {
    symbol: "◉",
    title: "Innovation",
    desc: "Pioneering cutting-edge design solutions that redefine what is possible in modern architecture and contracting.",
  },
  {
    symbol: "▽",
    title: "Precision",
    desc: "Meticulous attention to detail in every phase, ensuring flawless execution from blueprint to final completion.",
  },
  {
    symbol: "○",
    title: "Sustainability",
    desc: "Building responsibly with the future in mind — eco-conscious practices woven into every decision we make.",
  },
  {
    symbol: "△",
    title: "Collaboration",
    desc: "A seamless partnership with our clients, turning their vision into extraordinary built reality together.",
  },
];

const styles = `
  .cv-section {
    background: var(--dark);
    padding: 130px 60px;
  }
  .cv-inner { max-width: 1400px; margin: 0 auto; }
  .cv-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(192,154,91,0.08);
    margin-top: 64px;
  }
  .cv-card {
    background: var(--dark);
    padding: 52px 44px;
    position: relative;
    overflow: hidden;
    transition: background 0.4s ease;
    cursor: default;
  }
  .cv-card::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(192,154,91,0.05), transparent 60%);
    opacity: 0; transition: opacity 0.4s;
  }
  .cv-card:hover { background: rgba(192,154,91,0.035); }
  .cv-card:hover::after { opacity: 1; }
  .cv-symbol {
    display: block;
    font-size: 20px;
    color: #C09A5B;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
  }
  .cv-card:hover .cv-symbol { transform: scale(1.15); }
  .cv-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px; font-weight: 500;
    color: var(--text);
    margin-bottom: 14px;
  }
  .cv-desc {
    font-family: 'Lato', sans-serif;
    font-size: 13.5px; font-weight: 300;
    line-height: 2; color: rgba(242,237,228,0.50);
  }
  @media (max-width: 1024px) { .cv-grid { grid-template-columns: repeat(2,1fr); } .cv-section { padding: 90px 40px; } }
  @media (max-width: 640px)  { .cv-grid { grid-template-columns: 1fr; } .cv-section { padding: 80px 24px; } .cv-card { padding: 44px 28px; } }
`;

export default function CoreValuesSection() {
  return (
    <>
      <style>{styles}</style>
      <section className="cv-section">
        <div className="cv-inner">
          <Reveal>
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">
              Our Core <em>Values</em>
            </h2>
          </Reveal>

          <div className="cv-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="cv-card">
                  <span className="cv-symbol">{v.symbol}</span>
                  <h3 className="cv-title">{v.title}</h3>
                  <p className="cv-desc">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
