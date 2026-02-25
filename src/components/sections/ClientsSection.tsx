import React from "react";
import { Reveal } from "../../utils/Reveal";

const clients = [
  "Al Noor Group",
  "Emirates Holdings",
  "Gulf Structures",
  "Pinnacle Developments",
  "Zara Properties",
  "Horizon Contracting",
  "Meridian Corp",
  "Atlas Ventures",
];

const styles = `
  .clients-section {
    background: var(--dark-3);
    border-top: 1px solid rgba(192,154,91,0.08);
    padding: 130px 0;
  }
  .clients-header {
    max-width: 1400px; margin: 0 auto;
    padding: 0 60px 60px;
  }
  .clients-desc {
    font-family: 'Lato', sans-serif;
    font-size: 15px; font-weight: 300;
    line-height: 2.1;
    color: rgba(242,237,228,0.50);
    max-width: 520px;
  }
  .clients-marquee-wrap {
    overflow: hidden;
    position: relative;
    border-top: 1px solid rgba(192,154,91,0.08);
    border-bottom: 1px solid rgba(192,154,91,0.08);
  }
  .clients-marquee-wrap::before,
  .clients-marquee-wrap::after {
    content: '';
    position: absolute; top: 0; bottom: 0;
    width: 140px; z-index: 2;
    pointer-events: none;
  }
  .clients-marquee-wrap::before {
    left: 0;
    background: linear-gradient(90deg, var(--dark-3), transparent);
  }
  .clients-marquee-wrap::after {
    right: 0;
    background: linear-gradient(-90deg, var(--dark-3), transparent);
  }
  .clients-track {
    display: flex;
    width: max-content;
    animation: marquee 30s linear infinite;
  }
  .clients-track:hover { animation-play-state: paused; }
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .client-pill {
    display: flex; align-items: center;
    padding: 28px 52px;
    border-right: 1px solid rgba(192,154,91,0.09);
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 400;
    color: rgba(242,237,228,0.35);
    white-space: nowrap;
    transition: color 0.35s ease;
    cursor: default;
    letter-spacing: 0.5px;
  }
  .client-pill:hover { color: #DDB96E; }
  @media (max-width: 640px) {
    .clients-section { padding: 80px 0; }
    .clients-header { padding: 0 24px 48px; }
  }
`;

export default function ClientsSection() {
  const doubled = [...clients, ...clients];

  return (
    <>
      <style>{styles}</style>
      <section className="clients-section">
        <div className="clients-header">
          <Reveal>
            <span className="section-label">Trusted By</span>
            <h2 className="section-title">
              Our <em>Clients</em>
            </h2>
            <div className="gold-rule" />
            <p className="clients-desc">
              We are honored to have partnered with some of the region's most
              prestigious organizations, delivering projects that redefine their
              industries and stand the test of time.
            </p>
          </Reveal>
        </div>

        <div className="clients-marquee-wrap">
          <div className="clients-track">
            {doubled.map((c, i) => (
              <div className="client-pill" key={i}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
