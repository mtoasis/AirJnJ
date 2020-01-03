import styled from 'styled-components'

export const CalenderContainer = styled.div`
    position:absolute;
    width:260px;
    height:200px;
    left:200px;
    top:225px;
    display:${({display}) => display};
    z-index:2;
`