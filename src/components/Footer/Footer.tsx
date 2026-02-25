import React from "react";
import { Link } from "react-router-dom";

const styles = `
  .footer {
    background: #050505;
    border-top: 1px solid rgba(192,154,91,0.11);
    padding: 88px 60px 40px;
  }
  .footer-inner { max-width: 1400px; margin: 0 auto; }
  .footer-top {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr;
    gap: 80px;
    padding-bottom: 64px;
    border-bottom: 1px solid rgba(192,154,91,0.09);
  }
  .footer-logo img {
    height: 38px;
    filter: brightness(0) invert(1);
    margin-bottom: 22px;
    display: block;
    opacity: 0.85;
  }
  .footer-tagline {
    font-family: 'Lato', sans-serif;
    font-size: 13px; font-weight: 300;
    line-height: 2; color: rgba(242,237,228,0.38);
    max-width: 290px;
  }
  .footer-col-title {
    font-family: 'Raleway', sans-serif;
    font-size: 9px; font-weight: 600;
    letter-spacing: 4.5px; text-transform: uppercase;
    color: #C09A5B; margin-bottom: 26px;
  }
  .footer-links { list-style: none; display: flex; flex-direction: column; gap: 13px; }
  .footer-links a {
    font-family: 'Lato', sans-serif;
    font-size: 13px; font-weight: 300;
    color: rgba(242,237,228,0.45);
    text-decoration: none;
    transition: color 0.3s;
    letter-spacing: 0.3px;
  }
  .footer-links a:hover { color: #DDB96E; }
  .footer-contact-line {
    font-family: 'Lato', sans-serif;
    font-size: 13px; font-weight: 300;
    line-height: 1.9;
    color: rgba(242,237,228,0.45);
    margin-bottom: 5px;
  }
  .footer-bottom {
    padding-top: 30px;
    display: flex; align-items: center;
    justify-content: space-between;
  }
  .footer-copy {
    font-family: 'Raleway', sans-serif;
    font-size: 10px; letter-spacing: 1.5px;
    color: rgba(242,237,228,0.25);
    font-weight: 400;
  }
  .footer-accent {
    width: 36px; height: 1px;
    background: linear-gradient(90deg, #C09A5B, transparent);
  }
  @media (max-width: 900px) {
    .footer-top { grid-template-columns: 1fr; gap: 48px; }
    .footer { padding: 64px 40px 36px; }
  }
  @media (max-width: 640px) {
    .footer { padding: 60px 24px 30px; }
    .footer-bottom { flex-direction: column; gap: 16px; }
  }
`;

export default function Footer() {
  return (
    <>
      <style>{styles}</style>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <img
                src="/tact.png"
                alt="Tact Innovations"
                className="footer-logo"
              />
              <p className="footer-tagline">
                Design & General Contracting — crafting extraordinary spaces
                with precision, vision, and enduring quality since 2010.
              </p>
            </div>
            <div>
              <p className="footer-col-title">Navigation</p>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/ThreeDprojects">3D Projects</Link>
                </li>
                <li>
                  <Link to="/OnGroundProejcts">On Ground Projects</Link>
                </li>
                <li>
                  <Link to="/Transportation">Transportation & Supplies</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-col-title">Contact</p>
              <p className="footer-contact-line">Cairo, Egypt</p>
              <p className="footer-contact-line">info@tact-innovations.com</p>
              <p className="footer-contact-line">+20 100 000 0000</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} Tact Innovations Design & General
              Contracting. All rights reserved.
            </p>
            <div className="footer-accent" />
          </div>
        </div>
      </footer>
    </>
  );
}
