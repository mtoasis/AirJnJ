import React from 'react'
import { LogoContainer, HeaderContainer, MenuItemContainer } from './header.styles'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

const Header = () => {

    return (
        <HeaderContainer>
            
            <LogoContainer>
                <Logo />
            </LogoContainer>

            <MenuItemContainer>
                <span>
                    Host a home
            </span>

                <span>
                    Host an experience
            </span>

                <span>
                    Help
            </span>

                <span>
                    Sign up
            </span>

                <span>
                    Log in
            </span>
            </MenuItemContainer>
        </HeaderContainer>

    )
}

export default Header