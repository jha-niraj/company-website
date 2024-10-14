import React, { useState, useEffect } from 'react';

const ScrollMoveComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll and update scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll down to move the box horizontally</h1>
      <div style={{ height: '100vh' }}></div> {/* Spacer for scrolling */}
      
      {/* Box that moves left or right based on scroll */}
      <div
        style={{
          color: 'white',
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
          transform: `translateX(${scrollPosition}px)`, // Moves element horizontally
          transition: 'transform 20s ease',
        }}
      >ghm</div>
      
      <div style={{ height: '100vh' }}></div> {/* Additional space for more scrolling */}
    </div>
  );
};

export default ScrollMoveComponent;
