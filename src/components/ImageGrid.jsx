import React from 'react'
import ImageCard from './ImageCard'

const imagesData = [
    {
      "frontImageSrc": "/images/angry1.jpg",
      "backContent": ""
    },
    {
      "frontImageSrc": "/images/excited1.jpg",
      "backContent": ""
    },
    {
      "frontImageSrc": "/images/excited2.jpg",
      "backContent": ""
    },
    {
      "frontImageSrc": "/images/angry2.jpg",
      "backContent": ""
    }
  ]

const ImageGrid = ({flipped}) => {
    return (
        <div className={`gallery-wrapper ${flipped ? 'flipped' : ''}`}>
        {imagesData.map((image, index) =>  (
               <ImageCard key={index} frontImageSrc={image.frontImageSrc} backContent={image.backContent} />
            )
        )}
        </div>
    )
}

export default ImageGrid