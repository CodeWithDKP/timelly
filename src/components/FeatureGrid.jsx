import React from "react";
import "../components/FeatureGrid.css";
import  { useEffect, useRef } from "react";
const features = [
  {
    title: "Student Management",
    description: "Complete student profiles & records",
    iconPath:
      "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
    color: "bg-blue",
    glow: "glow-blue",
    gradient: "gradient-blue",
  },
  {
    title: "Assignments & Submissions",
    description: "Digital assignment workflow",
    iconPath:
      "M19.5 14.25v-2.625c0-1.042-.91-1.875-1.975-1.875h-1.5a2.25 2.25 0 00-2.25 2.25c0 1.052-.71 1.875-1.875 1.875c-1.07 0-1.875-.71-1.875-1.875a2.25 2.25 0 00-2.25-2.25h-1.5C5.41 9.75 4.5 10.582 4.5 11.625v2.625c0 1.35 1.15 2.25 2.25 2.25h10.5c1.1 0 2.25-.9 2.25-2.25z",
    color: "bg-purple",
    glow: "glow-purple",
    gradient: "gradient-purple",
  },
  {
    title: "Certificate Requests",
    description: "Automated certificate generation",
    iconPath:
      "M9 12.75l3 3m0 0l3-3m-3 3v-2.25M12 21a9 9 0 100-18 9 9 0 000 18z",
    color: "bg-green",
    glow: "glow-green",
    gradient: "gradient-green",
  },
  {
    title: "Fee Timeline & Payments",
    description: "Smart payment tracking system",
    iconPath:
      "M2.25 18.75a4.5 4.5 0 004.5 4.5h12.5a4.5 4.5 0 004.5-4.5v-12a4.5 4.5 0 00-4.5-4.5H6.75a4.5 4.5 0 00-4.5 4.5v12zm13.5-9h4.5m-4.5 4.5h4.5m-14.5 0h4.5m-4.5 4.5h4.5",
    color: "bg-orange",
    glow: "glow-orange",
    gradient: "gradient-orange",
  },
  {
    title: "Chat & Communication",
    description: "Real-time messaging platform",
    iconPath:
      "M20.25 8.5A2.25 2.25 0 0018 6.25H6A2.25 2.25 0 003.75 8.5v6.5A2.25 2.25 0 006 17.25h12A2.25 2.25 0 0020.25 15V8.5zM6 8.5a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75v6.5a.75.75 0 01-.75.75H6.75A.75.75 0 016 15V8.5z",
    color: "bg-cyan",
    glow: "glow-cyan",
    gradient: "gradient-cyan",
  },
  {
    title: "Call Requests",
    description: "Schedule parent-teacher calls",
    iconPath:
      "M2 3.5c0-1.38 1.12-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v17c0 1.38-1.12 2.5-2.5 2.5h-15c-1.38 0-2.5-1.12-2.5-2.5v-17zm11 15h-2v-2h2v2zm-2.5-5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm10.5 5.5v-15H4.5v15h15z",
    color: "bg-indigo",
    glow: "glow-indigo",
    gradient: "gradient-indigo",
  },
  {
    title: "Bulk File Uploads",
    description: "Import data efficiently",
    iconPath:
      "M12 4.5v15m0 0l6-6m-6 6l-6-6M4.5 19.5h15",
    color: "bg-pink",
    glow: "glow-pink",
    gradient: "gradient-pink",
  },
  {
    title: "Smart Notifications",
    description: "Instant updates & alerts",
    iconPath:
      "M14.857 17.082a23.848 23.848 0 005.454-1.332 9.75 9.75 0 00-6.708-8.5 9.75 9.75 0 00-8.5 6.708 23.848 23.848 0 001.332 5.454L12 18.188l2.857-1.106zm-7.794-2.812a1 1 0 11-2 0 1 1 0 012 0z",
    color: "bg-teal",
    glow: "glow-teal",
    gradient: "gradient-teal",
  },
  {
    title: "Analytics & Reports",
    description: "Comprehensive insights",
    iconPath:
      "M10.5 6a7.5 7.5 0 107.5 7.5 7.5 7.5 0 00-7.5-7.5zM3 16.5a7.5 7.5 0 117.5 7.5 7.5 7.5 0 01-7.5-7.5z",
    color: "bg-violet",
    glow: "glow-violet",
    gradient: "gradient-violet",
  },
  {
    title: "Event Management",
    description: "School calendar & events",
    iconPath:
      "M6.75 3v-1.5m10.5 1.5v-1.5m-6 9.75H9.75m1.5-6h1.5m-1.5 6V7.5m1.5 4.5v-4.5m4.5 4.5H12m1.5 4.5H12m0 0H7.5m1.5-4.5H7.5m0 4.5h1.5m1.5-4.5h1.5m0 0v-4.5m-1.5 4.5H7.5M4.5 19.5h15",
    color: "bg-amber",
    glow: "glow-amber",
    gradient: "gradient-amber",
  },
  {
    title: "Attendance Tracking",
    description: "Digital attendance system",
    iconPath:
      "M10 18a8 8 0 100-16 8 8 0 000 16zM8 10a2 2 0 114 0 2 2 0 01-4 0zM17 17l4 4m-4-4a4 4 0 01-4-4",
    color: "bg-rose",
    glow: "glow-rose",
    gradient: "gradient-rose",
  },
  {
    title: "Task Management",
    description: "Organize & track tasks",
    iconPath:
      "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "bg-emerald",
    glow: "glow-emerald",
    gradient: "gradient-emerald",
  },
];

const FeatureCard = ({ feature }) => {
  return (
    <div className={`feature-card ${feature.color} ${feature.glow}`}>
      <div className={`icon-container ${feature.gradient}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon-svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
        </svg>
      </div>

      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-desc">{feature.description}</p>
    </div>
  );
};

const FeatureGrid = () => {
  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            target.classList.add("show");
            target.classList.remove("hide");
          } else {
            target.classList.remove("show");
            target.classList.add("hide");
          }
        });
      },
      { threshold: 0.3 }
    );

    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  // Group features into rows of 4
  const rows = [];
  for (let i = 0; i < features.length; i += 4) {
    rows.push(features.slice(i, i + 4));
  }

  return (
    <section className="feature-grid-section">
      <div className="container text-center mb-5">
        <h2 className="title">
          <span className="header-gradient-text">Powerful Features </span>
          That Drive Success
        </h2>
        <p className="subtitle">
          Everything your school needs, unified in one smart management ecosystem.
        </p>
      </div>

      <div className="container">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="row g-4 feature-row"
            ref={(el) => (rowsRef.current[idx] = el)}
          >
            {row.map((feature, index) => (
              <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;