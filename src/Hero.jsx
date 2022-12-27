import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  const titleRef = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "JS クラブ。日本の　エンジニア",
        "CLB KỸ SƯ PHẦN MỀM NHẬT BẢN - JS CLUB",
      ],
      typeSpeed: 150,
      backSpeed: 150,
    };
    typed.current = new Typed(titleRef.current, options);

    // destroy typed instance to prevent memory leak
    return () => typed.current.destroy();
  }, []);

  return (
    <div className="relative">
      <img
        src="/bg.jpg"
        alt="hero"
        className="h-screen w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-8">
        <h1
          className="text-white text-3xl md:text-6xl max-w-lg font-semibold text-center mx-auto leading-12"
          ref={titleRef}
        ></h1>
      </div>
    </div>
  );
}

export default Hero;
