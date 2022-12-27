import React, { useEffect } from "react";
import Macy from "macy";

function Gallery() {
  const macyOptions = {
    container: "#gallery-grid",
    trueOrder: false,
    mobileFirst: true,
    margin: 30,
    columns: 1,
    breakAt: {
      1000: 3,
      810: 2,
    },
  };

  const images = [
    {
      id: 1,
      source: "/assets/academic/2022_Fall_CodingProject_chungket.jpg",
    },
    {
      id: 2,
      source: "/assets/academic/2022_Spring_AlgorithmArena.jpg",
    },
    {
      id: 3,
      source:
        "/up1.jpg",
    },
    {
      id: 4,
      source: "/assets/culture/2022_Spring_J-Venture_PhanDinhPhung.jpg",
    },
    {
      id: 5,
      source: "/assets/academic/2021_Fall_CodingProject_CK.jpg",
    },
    {
      id: 6,
      source:
        "/up2.jpg",
    },
    {
      id: 7,
      source: "/assets/academic/2019_Fall_Talkshow.jpg",
    },
    {
      id: 8,
      source:
        "/assets/w1.jpg",
    },
    {
      id: 9,
      source:
        "/assets/w2.jpg",
    },
    {
      id: 10,
      source: "/assets/culture/2021_Fall_Noel.jpg",
    },
  ];

  useEffect(() => {
    new Macy(macyOptions);
  }, []);

  return (
    <div id="gallery-grid">
      {images.map((image) => (
        <img src={image.source} alt="" key={image.id} className="rounded-md" />
      ))}
    </div>
  );
}

export default Gallery;
