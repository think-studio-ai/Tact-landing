import React from "react";
import { Reveal } from "../../utils/Reveal";

const styles = `
  .about-section {
    background: var(--dark);
    padding: 130px 60px;
  }
  .about-inner {
    max-width: 1400px; margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    align-items: center;
  }
  .about-image-wrap {
    position: relative;
    z-index: 1;
  }
  .about-image {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    display: block;
    filter: grayscale(15%) contrast(1.06);
  }
  .about-frame {
    position: absolute;
    top: 22px; left: 22px;
    right: -22px; bottom: -22px;
    border: 1px solid rgba(192,154,91,0.22);
    z-index: -1;
    pointer-events: none;
  }
  .about-text { }
  .about-body {
    font-family: 'Lato', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 2.1;
    color: rgba(242,237,228,0.55);
    max-width: 560px;
  }
  .about-body + .about-body { margin-top: 20px; }
  .about-stats {
    display: flex;
    gap: 44px;
    margin-top: 52px;
    padding-top: 44px;
    border-top: 1px solid rgba(192,154,91,0.12);
  }
  .about-stat {
    border-left: 1px solid rgba(192,154,91,0.28);
    padding-left: 18px;
  }
  .about-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 46px;
    font-weight: 400;
    color: #DDB96E;
    line-height: 1;
    margin-bottom: 6px;
  }
  .about-stat-lbl {
    font-family: 'Raleway', sans-serif;
    font-size: 9px;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: rgba(242,237,228,0.40);
    font-weight: 500;
  }
  @media (max-width: 1024px) {
    .about-inner { grid-template-columns: 1fr; gap: 60px; }
    .about-section { padding: 90px 40px; }
  }
  @media (max-width: 640px) {
    .about-section { padding: 80px 24px; }
    .about-stats { gap: 28px; }
  }
`;

export default function AboutSection() {
  return (
    <>
      <style>{styles}</style>
      <section className="about-section">
        <div className="about-inner">
          <Reveal direction="left" delay={100}>
            <div className="about-image-wrap">
              <img
                className="about-image"
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=82&fit=crop"
                alt="Tact Innovations — Architecture"
              />
              <div className="about-frame" />
            </div>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <div className="about-text">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">
                Building the Future
                <br />
                <em>with Precision & Vision</em>
              </h2>
              <div className="gold-rule" />
              <p className="about-body">
                Tact Innovations Design & General Contracting is a premier
                design and construction firm with a distinguished reputation for
                delivering extraordinary spaces. We blend visionary architecture
                with disciplined engineering, transforming ambitious ideas into
                enduring built reality.
              </p>
              <p className="about-body">
                Since our founding, we have been trusted by Egypt's most
                discerning clients — from landmark commercial towers to intimate
                residential masterpieces — each a testament to our unwavering
                commitment to excellence.
              </p>
              <div className="about-stats">
                {[
                  { num: "15+", lbl: "Years of Excellence" },
                  { num: "200+", lbl: "Projects Completed" },
                  { num: "50+", lbl: "Expert Team" },
                ].map((s) => (
                  <div className="about-stat" key={s.lbl}>
                    <div className="about-stat-num">{s.num}</div>
                    <div className="about-stat-lbl">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
