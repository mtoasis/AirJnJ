import styled from 'styled-components'

export const AdventureIntroContainer = styled.div`
    height:450px;
    width:80%;
    margin:auto;
    display:flex;
    flex-direction:column;
`

export const CardItemsContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:20px;
`

export const LinkText = styled.span`
    font-weight:bold;

        &:hover{
            text-decoration:underline
        }
`