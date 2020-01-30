import styled from 'styled-components'

export const ImageBox = styled.div`
    height:${({ size }) => `${size}px`};
    width: ${({md}) => md === 0? `100%` : `${100/md}%`};
    background-size: cover;
    background-position:center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    border-radius:5px;
    border-width:0px;
`