import React from 'react'

const ImageCard = ({src, title}) => {
  return (
    <img 
    src={src} 
    alt={title}
    style={{height: 150, width: 150, borderRadius: 6}}
    />
  )
}

export default ImageCard