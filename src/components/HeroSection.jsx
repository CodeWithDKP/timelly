import React from 'react';
import DotBackground from './DotBackground';
import { useEffect } from 'react';
import '../components/HeroSection.css';

const HeroSection = () => {

  useEffect(() => {
    const counters = document.querySelectorAll(".stat-value");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const updateCounter = () => {
        const speed = target / 120;

        if (count < target) {
          count += speed;
          counter.innerText = Math.floor(count);
          requestAnimationFrame(updateCounter);
        } else {
          // Format final numbers
          counter.innerText =
            target >= 1000 ? (target >= 100000 ? "500K+" : "10K") : target + "%";
        }
      };

      updateCounter();
    });
  }, []);


  return (
    <section className="hero-container">
      {/* 1. Animated Dot Background */}
      <DotBackground />

      {/* 2. Content Left Side */}
      <div className="hero-content-left">
        <p className="herosubtitle">✨ Next-Gen School Management</p>
        <h1 className="titlehero">
          Smart School <br /> Management System
        </h1>
        <p className="description">
          Manage assignments, communication, fees, certificates & more — with one
          powerful platform for Admin, Teachers & Parents.
        </p>

        {/* CTA Buttons */}
        <div className="cta-group">
          <button className="cta-button primary">
            Try Demo <span className="arrow">→</span>
          </button>
          <button className="cta-button secondary">Get Started</button>
        </div>

        {/* Stats */}
        <div className="stats-group">
          <div className="stat-item">
            <span className="stat-value" data-target="10000">0</span>
            <span className="stat-label">Schools</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" data-target="500000">0</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" data-target="99.9">0</span>
            <span className="stat-label">Uptime</span>
          </div>
        </div>

      </div>

      {/* 3. Image Right Side */}
      <div className="hero-content-right">
        {/* Main animated image container */}
        <div className="floating-image-wrapper">
          {/* NOTE: Replace with your actual image component or <img> tag */}
          <div className="main-mockup-image">
            {/*  */}
          </div>
        </div>

        {/* Animated fixed panels (Admin Panel & Parent App) */}
        <div className="floating-panel top-right">Admin Panel</div>
        <div className="floating-panel bottom-left">Parent App</div>
      </div>
    </section>
  );
};

export default HeroSection;