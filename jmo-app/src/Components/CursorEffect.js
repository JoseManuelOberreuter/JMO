import React, { useEffect, useRef } from "react";
import '../Css/CursorEffect.css';

export const CursorEffect = () => {
  const circleRefs = useRef([]);

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const colors = [
      '#868686', '#7b7b7b', '#707070', '#656565', '#5b5b5b', '#515151', '#464646', '#3d3d3d', '#333333', '#2a2a2a', '#212121', '#181818'
  ];

    // Calculate color step to apply color linearly across all circles
    circleRefs.current.forEach((circle, index) => {
      const colorIndex = Math.floor((index / (circleRefs.current.length - 1)) * (colors.length - 1));
      circle.style.backgroundColor = colors[colorIndex];
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      const isOverLink = document.elementFromPoint(x, y)?.tagName.toLowerCase() === 'a';
      const isOverImg = document.elementFromPoint(x, y)?.tagName.toLowerCase() === 'img';

      circleRefs.current.forEach((circle, index) => {
        if (isOverLink || isOverImg) {
          circle.style.display = 'none';
        } else {
          circle.style.display = 'block';
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
          circle.style.transform = `scale(${(circleRefs.current.length - index) / circleRefs.current.length})`;

          circle.x = x;
          circle.y = y;

          const nextCircle = circleRefs.current[index + 1] || circleRefs.current[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div 
          key={index} 
          className="circle" 
          ref={(el) => (circleRefs.current[index] = el)} 
        />
      ))}
    </>
  );
};
