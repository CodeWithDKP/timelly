import React from 'react';
import '../components/HeroSection.css'; // Uses CSS for animation

// Helper component for the animated background dots
const DotBackground = () => {
  // Generate a certain number of dots (e.g., 50)
  const dots = Array.from({ length: 20 }, (_, index) => (
    <div
      key={index}
      className="dot"
      style={{
        // Set random initial position
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        // Set random animation delay for staggered movement
        animationDelay: `${Math.random() * 10}s`,
      }}
    ></div>
  ));

  return <div className="dot-background-container">{dots}</div>;
};

export default DotBackground;