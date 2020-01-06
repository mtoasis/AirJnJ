import React from 'react';
import {Container, ImageContainer, TextContainer} from './shadow-box.styles';

const ShadowBox = ({imageOption, textInput}) =>{
    return(
        <Container>
            <ImageContainer option = {imageOption}/>
            <TextContainer>{textInput}</TextContainer>
        </Container>
    )
}

export default ShadowBox;