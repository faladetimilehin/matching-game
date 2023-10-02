import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "./ImageCard";
import levelOne from "../assets/cardDecks/levelOne.json";
import levelTwo from '../assets/cardDecks/levelTwo.json'

const ImageGrid = ({ flipped }) => {
  const [imagesData, setImagesData] = useState([]);

  const { level } = useParams();
  console.log(level);
  useEffect(() => {
    function shuffleData() {
      if (level === "levelOne") {
// create logic to randomize the array

        setImagesData(levelOne)
      }
      else if (level === "levelTwo") {


        setImagesData(levelTwo)
      }
    }

    shuffleData();
  }, []);

  return (
    <div className={`gallery-wrapper ${flipped ? "flipped" : ""}`}>
      {imagesData.map((image, index) => (
        <ImageCard
          key={index}
          frontImageSrc={image.frontImageSrc}
          backContent={image.backContent}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
