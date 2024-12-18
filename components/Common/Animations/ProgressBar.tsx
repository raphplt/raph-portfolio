"use client";
import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollDistance, setScrollDistance] = useState(0);

  const calculateScrollDistance = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    return scrollPercent;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollDistance(calculateScrollDistance());
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial scroll distance

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-5 left-0 right-0 w-[95%] mx-auto h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full animate-advanced-rgb`}
        style={{
          width: `${scrollDistance}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
