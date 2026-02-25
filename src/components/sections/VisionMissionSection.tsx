import React from "react";
import { Reveal } from "../../utils/Reveal";

const styles = `
  .vm-section {
    background: var(--dark-2);
    border-top: 1px solid rgba(192,154,91,0.08);
    border-bottom: 1px solid rgba(192,154,91,0.08);
    padding: 130px 60px;
  }
  .vm-inner { max-width: 1400px; margin: 0 auto; }
  .vm-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: rgba(192,154,91,0.10);
    margin-top: 64px;
  }
  .vm-card {
    background: var(--dark-2);
    padding: 68px 56px;
    position: relative;
    overflow: hidden;
    transition: background 0.4s ease;
  }
  .vm-card:hover { background: rgba(192,154,91,0.03); }
  .vm-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #C09A5B, transparent);
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.55s cubic-bezier(0.16,1,0.3,1);
  }
  .vm-card:hover::before { transform: scaleX(1); }
  .vm-watermark {
    position: absolute;
    top: 16px; right: 28px;
    font-family: 'Playfair Display', serif;
    font-size: 96px;
    font-style: italic;
    font-weight: 500;
    color: rgba(192,154,91,0.05);
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }
  .vm-tag {
    font-family: 'Raleway', sans-serif;
    font-size: 9px; font-weight: 600;
    letter-spacing: 5px; text-transform: uppercase;
    color: #C09A5B;
    margin-bottom: 22px;
    display: block;
  }
  .vm-title {
    font-family: 'Playfair Display', serif;
    font-size: 30px; font-weight: 500;
    color: var(--text);
    margin-bottom: 24px;
    line-height: 1.3;
  }
  .vm-text {
    font-family: 'Lato', sans-serif;
    font-size: 14.5px; font-weight: 300;
    line-height: 2.1;
    color: rgba(242,237,228,0.52);
  }
  @media (max-width: 1024px) {
    .vm-grid { grid-template-columns: 1fr; }
    .vm-section { padding: 90px 40px; }
  }
  @media (max-width: 640px) {
    .vm-section { padding: 80px 24px; }
    .vm-card { padding: 48px 28px; }
  }
`;

export default function VisionMissionSection() {
  return (
    <>
      <style>{styles}</style>
      <section className="vm-section">
        <div className="vm-inner">
          <Reveal>
            <span className="section-label">Our Direction</span>
            <h2 className="section-title">
              Vision &amp; <em>Mission</em>
            </h2>
          </Reveal>

          <div className="vm-grid">
            <Reveal delay={100}>
              <div className="vm-card">
                <span className="vm-watermark">V</span>
                <span className="vm-tag">Our Vision</span>
                <h3 className="vm-title">To Redefine the Built Environment</h3>
                <p className="vm-text">
                  We envision a world where every structure is a masterwork —
                  where design excellence and human experience are inseparable.
                  Tact Innovations aspires to be the region's most respected
                  name in design and contracting, setting benchmarks that
                  inspire the industry for generations to come.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="vm-card">
                <span className="vm-watermark">M</span>
                <span className="vm-tag">Our Mission</span>
                <h3 className="vm-title">
                  Delivering Excellence at Every Scale
                </h3>
                <p className="vm-text">
                  Our mission is to provide comprehensive, integrated design and
                  contracting solutions that exceed expectations. Through
                  innovation, integrity, and meticulous craftsmanship, we
                  transform our clients' most ambitious visions into
                  extraordinary built reality — on time, within budget, and
                  beyond expectation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
