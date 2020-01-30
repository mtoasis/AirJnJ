import React from 'react'
import CardItem from '../card-item/card-item.component'
import { AdventureIntroContainer, CardItemsContainer, LinkText } from './adventure-intro.styles'

const AdventureIntro = () => (

    <AdventureIntroContainer>
        <CardItemsContainer>
            <CardItem
                md={4}
                imageSize="350"
                destination="JAPAN"
                description="SAMPLE DESCRIPTION TEXT $500/night"
                imageUrl="https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/japan-1200x729.jpg"
            />

            <CardItem
                md={4}
                imageSize="350"
                destination="JAPAN"
                description="SAMPLE DESCRIPTION TEXT $500/night"
                imageUrl="https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/japan-1200x729.jpg"
            />

            <CardItem
                md={4}
                imageSize="350"
                destination="JAPAN"
                description="SAMPLE DESCRIPTION TEXT $500/night"
                imageUrl="https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/japan-1200x729.jpg"
            />

            <CardItem
                md={4}
                imageSize="350"
                destination="JAPAN"
                description="SAMPLE DESCRIPTION TEXT $500/night"
                imageUrl="https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/japan-1200x729.jpg"
            />

        </CardItemsContainer>
        <a href="#"><LinkText>Show all adventures ></LinkText></a>
    </AdventureIntroContainer>

)

export default AdventureIntro