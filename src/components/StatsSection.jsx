import React from "react";
import "../components/StatsSection.css";

const stats = [
  { number: "50+", label: "Features", color: "stat-blue" },
  { number: "24/7", label: "Support", color: "stat-purple" },
  { number: "100%", label: "Secure", color: "stat-green" },
  { number: "Cloud", label: "Based", color: "stat-cyan" },
];

const StatsSection = () => {
  return (
    <>
    <section className="stats-section">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {stats.map((item, index) => (
            <div
              className="col-6 col-md-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className={`stat-card ${item.color}`}>
                <h2 className="stat-number">{item.number}</h2>
                <p className="stat-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="timelly-end-section" data-aos="fade-up">
      <div className="timelly-container text-center">
        <h1 className="timelly-title">Timelly</h1>
        <p className="timelly-tagline">
          The Smart Way to Manage Your School — Faster, Simpler, Better.
        </p>
      </div>
    </section>
    </>
  );
};

export default StatsSection;
