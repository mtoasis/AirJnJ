import React from 'react';
import {Container, SectionTitle, ContentContainer} from './look-around.styles';
import ShadowBox from '../shadow-box/shadow-box.component';
import FirstImage from '../../assets/images/look-around-1.jpg';
import SecondImage from '../../assets/images/look-around-2.jpg';
import ThirdImage from '../../assets/images/look-around-3.jpg';


const LookAround = () => {

    return(
        <Container>
            <SectionTitle>Explore AirJnJ</SectionTitle>
            <ContentContainer>
                <ShadowBox imageOption={FirstImage} textInput='Rooms' />
                <ShadowBox imageOption={SecondImage} textInput='Experience' />
                <ShadowBox imageOption={ThirdImage} textInput='Adventure' />
            </ContentContainer>
            
        </Container>
    )
}

export default LookAround;