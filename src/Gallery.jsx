import React, { useEffect } from "react";
import Macy from "macy";

function Gallery() {
  const macyOptions = {
    container: "#gallery-grid",
    trueOrder: true,
    mobileFirst: true,
    margin: 30,
    columns: 1,
    breakAt: {
      1000: 3,
      820: {
        margin: 30,
        columns: 2,
      },
      650: {
        margin: 30,
        columns: 1,
      },
    },
  };

  const images = [
    {
      id: 1,
      source: "/assets/academic/2022_Fall_CodingProject_chungket.jpg",
    },
    {
      id: 2,
      source: "/assets/culture/2022_Summer_ClubDay.jpg",
    },
    {
      id: 3,
      source: "/assets/academic/2022_Spring_AlgorithmArena.jpg",
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
      source: "/assets/culture/2019_Fall_Teambuilding.jpg",
    },
    {
      id: 7,
      source: "/assets/academic/2019_Fall_Talkshow.jpg",
    },
    {
      id: 8,
      source: "/assets/culture/2018_Fall_J-Party.jpg",
    },
    {
      id: 9,
      source: "/assets/academic/2017_Fall_FPTU-HACKATHON-OPEN.jpg",
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
