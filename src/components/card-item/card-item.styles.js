import styled from 'styled-components'

export const CardItemContainer = styled.div`
    width: ${({md}) => md === 0? `100%` : `${100/md}%`};
    height:${({height}) => `${height}px`};
    padding: 0 6px;
`
export const TextContainer = styled.div`
    width:100%;
`

