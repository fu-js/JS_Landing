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
        "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/311057442_536936495102277_2096686954413838483_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=bgnXTOlsWWgAX85ZTZ1&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDAO9Mv6eFjDMwpGl_YKUJOq3F-JMwjlzlI_AK3QMUCTA&oe=63AEDC0D",
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
        "https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/77263680_2619798251468008_4849687958938189824_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=ep5KHIKCegQAX_smPBj&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDZ98IgZ7e_1qda7q8yu880rbbf6-8SjR7e3huhFjn6ZQ&oe=63D10134",
    },
    {
      id: 7,
      source: "/assets/academic/2019_Fall_Talkshow.jpg",
    },
    {
      id: 8,
      source:
        "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/312099834_552262273569699_5732144126054344055_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=soJyYEL-cvAAX-_d3U_&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB4g3ZiIyFcBr-T4136qZ3v4aSsDBylV55B6gLsJhPmFQ&oe=63AF61A6",
    },
    {
      id: 9,
      source:
        "https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/109693441_3158651554249339_9172726671651452305_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=GwTlI6qD31MAX-BSmBZ&tn=cxCViZNeSslI2iHT&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBc9X10nnmrEBxVrqtnkkZZ5Q1-HdA_DTzDKlKK-4rmDQ&oe=63D11B83",
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
