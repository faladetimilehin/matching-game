// import React from 'react'
// import ImageCard from './ImageCard'
// import images from './imagesData.json'

// const ImageGrid = () => {
//     return (
//         <div className='image-grid-wrapper'>
//         {images.map((image) => {
//             return (
//                 <div className='gallery-wrapper'><ImageCard key={image.id} {...image} />
//                 </div>
//             )
//         })}
//         </div>
//     )
// }

// export default ImageGrid

import React from 'react'
import ImageCard from './ImageCard'

const imagesData = [
    {
      "frontImageSrc": "/images/angry1.jpg",
      "backContent": "ANGRY"
    },
    {
      "frontImageSrc": "/images/excited1.jpg",
      "backContent": "EXCITED"
    },
    {
      "frontImageSrc": "/images/excited2.jpg",
      "backContent": "EXCITED"
    },
    {
      "frontImageSrc": "/images/angry2.jpg",
      "backContent": "ANGRY"
    }
  ]

const ImageGrid = () => {
    return (
        <div className='gallery-wrapper'>
        {imagesData.map((image, index) =>  (
               <ImageCard key={index} frontImageSrc={image.frontImageSrc} backContent={image.backContent} />
            )
        )}
        </div>
    )
}

export default ImageGrid