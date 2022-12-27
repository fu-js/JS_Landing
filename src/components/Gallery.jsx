import React, { useEffect } from "react";
import Macy from "macy";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { oddBoxVariant } from "../utils/variantAnimation";

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
      source: "/assets/others/up1.jpg",
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
      source: "/assets/others/up2.jpg",
    },
    {
      id: 7,
      source: "/assets/academic/2019_Fall_Talkshow.jpg",
    },
    {
      id: 8,
      source: "/assets/others/w1.jpg",
    },
    {
      id: 9,
      source: "/assets/others/w2.jpg",
    },
    {
      id: 10,
      source: "/assets/culture/2021_Fall_Noel.jpg",
    },
];

function Gallery() {
  const [ref, inView] = useInView({
    threshold: 0.05,
  });
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  useEffect(() => {
    new Macy(macyOptions);
  }, []);

  return (
    <motion.section
      id="gallery-grid"
      ref={ref}
      variants={oddBoxVariant}
      initial="hidden"
      animate={control}
    >
      {images.map((image) => (
        <img src={image.source} alt="" key={image.id} className="rounded-md" />
      ))}
    </motion.section>
  );
}

export default Gallery;