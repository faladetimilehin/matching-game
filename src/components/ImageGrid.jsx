import React from 'react'
import ImageCard from './ImageCard'
import images from './imagesData.json'

const ImageGrid = () => {
    return (
        <div className='image-grid-wrapper'>
        {images.map((image) => {
            return (
                <div className='gallery-wrapper'><ImageCard key={image.id} {...image} />
                </div>
            )
        })}
        </div>
    )
}

export default ImageGrid