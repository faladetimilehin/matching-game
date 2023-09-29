// import React from 'react'

// const ImageCard = ({src, title}) => {
//   return (
//     <img 
//     src={src} 
//     alt={title}
//     style={{height: 150, width: 150, borderRadius: 6}}
//     />
//   )
// }

// export default ImageCard

import React, {useState} from 'react'

const ImageCard = ({frontImageSrc, backContent}) => {
const[isFlipped, setIsFlipped] = useState(false)

const handleCardFlip = () => {
  setIsFlipped(!isFlipped)
}

  return (
    <div className={`card ${isFlipped ? 'flipped': ''}`} onClick={handleCardFlip}>
      <div className='card-front'>
        <img 
          src={frontImageSrc} 
        alt='front-side'
        style={{height: 150, width: 150, borderRadius: 6}}
        />
      </div>
      <div className='card-back'>
        {backContent}
      </div>
    </div>
  )
}

export default ImageCard