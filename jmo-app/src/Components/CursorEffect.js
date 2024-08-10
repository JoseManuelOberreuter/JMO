import React, { useEffect, useRef } from "react";
import '../Css/CursorEffect.css';

export const CursorEffect = () => {
    
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
    
    const colors = [
        '#4ec990', '#37c79b', '#19c4a6', '#00c1b0', '#00beba', '#00bac3', '#00b6ca', '#00b1d0', '#0eacd4', '#2fa7d6', '#44a2d7', '#569cd6'
       ];

       
    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });
    
    window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
    });    

    

    function animateCircles() {
      
      let x = coords.x;
      let y = coords.y;
      
      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        circle.style.scale = (circles.length - index) / circles.length;
        
        circle.x = x;
        circle.y = y;
    
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
     
      requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
    
    

  return (
    <>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
    </>
  );
};

