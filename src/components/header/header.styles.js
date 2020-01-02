import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width:100vw;
    position: relative;
    height:80px;
`

export const LogoContainer = styled.div`
    position:absolute;
    left:0;
    height: 70px;
    width: 70px;
    padding: 25px;
    color:white;
    margin-top:-25px;

        svg{
            fill:white;
            height:50px;
        }      
`
export const MenuItemContainer = styled.div`
    position:absolute;
    margin-right:5vw;
    right:0;
        span{
                font-size:15px;
                color:white;
                margin-left:30px;
            }
`