import React from "react";
import { Reveal } from "../../utils/Reveal";

const reasons = [
  {
    num: "01",
    title: "Industry Leadership",
    desc: "We are a leading company in design and finishing, specializing in real estate management and investment.",
  },
  {
    num: "02",
    title: "Vision for the Future",
    desc: "We are shaping the future of real estate for a better world by using the latest technologies to create rewarding opportunities and sustainable solutions.",
  },
  {
    num: "03",
    title: "Innovative & Sustainable Solutions",
    desc: "We create amazing spaces and deliver sustainable real estate solutions for our clients, teams, and communities.",
  },
  {
    num: "04",
    title: "Strategic Expansion",
    desc: "TACT aims to expand across the local and Arab markets over the next five years, leveraging strong market research and abundant opportunities in Egypt and the region.",
  },
];

const styles = `
  .why-section {
    background: var(--dark-2);
    border-top: 1px solid rgba(192,154,91,0.07);
  }
  .why-inner {
    max-width: 1400px; margin: 0 auto;
    padding: 130px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 110px;
    align-items: start;
  }
  .why-sticky {
    position: sticky;
    top: 120px;
  }
  .why-body {
    font-family: 'Lato', sans-serif;
    font-size: 15px; font-weight: 300;
    line-height: 2.1;
    color: rgba(242,237,228,0.52);
    max-width: 440px;
  }
  .why-cards { display: flex; flex-direction: column; }
  .why-card {
    padding: 38px 0;
    border-bottom: 1px solid rgba(192,154,91,0.09);
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: 26px;
    align-items: start;
    transition: padding-left 0.3s ease;
  }
  .why-card:first-child { border-top: 1px solid rgba(192,154,91,0.09); }
  .why-card:hover { padding-left: 6px; }
  .why-num {
    font-family: 'Playfair Display', serif;
    font-size: 38px; font-weight: 400;
    color: rgba(192,154,91,0.22);
    line-height: 1;
    transition: color 0.3s;
  }
  .why-card:hover .why-num { color: #C09A5B; }
  .why-title {
    font-family: 'Playfair Display', serif;
    font-size: 21px; font-weight: 500;
    color: var(--text);
    margin-bottom: 10px;
    line-height: 1.3;
  }
  .why-desc {
    font-family: 'Lato', sans-serif;
    font-size: 13.5px; font-weight: 300;
    line-height: 2; color: rgba(242,237,228,0.50);
  }
  @media (max-width: 1024px) {
    .why-inner { grid-template-columns: 1fr; gap: 60px; padding: 90px 40px; }
    .why-sticky { position: static; }
  }
  @media (max-width: 640px) { .why-inner { padding: 80px 24px; } }
`;

export default function WhyUsSection() {
  return (
    <>
      <style>{styles}</style>
      <section className="why-section">
        <div className="why-inner">
          <Reveal direction="left">
            <div className="why-sticky">
              <span className="section-label">The Tact Advantage</span>
              <h2 className="section-title">
                Why Choose
                <br />
                <em>Our Company?</em>
              </h2>
              <div className="gold-rule" />
              <p className="why-body">
                In a competitive real estate landscape, TACT stands out through
                innovation, strategic vision, and a deep commitment to
                delivering exceptional design, finishing, and investment
                solutions.
              </p>
            </div>
          </Reveal>

          <div className="why-cards">
            {reasons.map((r, i) => (
              <Reveal key={r.num} delay={i * 100}>
                <div className="why-card">
                  <div className="why-num">{r.num}</div>
                  <div>
                    <h3 className="why-title">{r.title}</h3>
                    <p className="why-desc">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
