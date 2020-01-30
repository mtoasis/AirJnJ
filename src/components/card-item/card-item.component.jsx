import React from 'react'
import ImageContainer from '../image-container/image-container.component'
import {CardItemContainer, TextContainer} from './card-item.styles'

const CardItem = ({md, height, destination, description, imageUrl, imageSize}) =>{
    return(
        <CardItemContainer md={md} height={height}>
            <ImageContainer imageUrl={imageUrl} md={1} size={imageSize}/>
            <TextContainer>
                <span>
                    {destination}
                </span>
                <br />
                <span>
                    {description}
                </span>
            </TextContainer>
        </CardItemContainer>
    )
}

export default CardItem