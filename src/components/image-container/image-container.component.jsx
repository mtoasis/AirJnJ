import React from 'react'
import {ImageBox} from './image-container.styles'

const ImageContainer = ({md, size, imageUrl}) =>{

    return(
        <ImageBox 
            md={md}
            size={size}
            imageUrl={imageUrl}
        />
    )
}

export default ImageContainer