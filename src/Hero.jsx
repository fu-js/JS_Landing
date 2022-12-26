import React, { useEffect, useState } from "react";

function Hero() {
  const TITLE = "JS クラブ。日本の　エンジニア";
  const [title, setTitle] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitle(TITLE.slice(0, title.length + 1));
    }, 100);

    return () => clearInterval(timeout);
  }, [title]);

  return (
    <div className="relative">
      <img
        src="/assets/culture/2022_Summer_ClubDay.jpg"
        alt="hero"
        className="h-screen w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-8">
        <h1 className="text-white text-3xl md:text-6xl max-w-lg font-semibold text-center mx-auto leading-10">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default Hero;
