import React from 'react'
import ImageContainer from '../image-container/image-container.component'
import CustomButton from '../custom-button/custom-button.component'

import { PlusPlacesContainer, TextContainer, ImageButtonContainer } from './plus-places.styles'

const PlusPlaces = () => {
    return (
        <PlusPlacesContainer>
            <TextContainer>
                <h2>AirJnJ Plus places to stay</h2>
                <span>A selection of places to stay verified for quality and design</span>
            </TextContainer>

            <ImageButtonContainer>
                <ImageContainer
                    md={1}
                    size='300'
                    imageUrl='https://pix10.agoda.net/hotelImages/413/4139178/4139178_18011223120061021368.jpg?s=1024x768'
                />

                <CustomButton inverted round>EXPLORE STAYS!</CustomButton>
            </ImageButtonContainer>


        </PlusPlacesContainer>
    )
}

export default PlusPlaces