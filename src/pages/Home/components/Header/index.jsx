import React from 'react';

import Rectangle from '../../../../core/components/Rectangle';

import Logo from '../../../../core/assets/logo1.png'
import imgInfo from '../../../../core/assets/moreinfo.png'

import {
    Container,
    MoreInfo,
    NavHeader,
} from './styles';
import Button from '../../../../core/components/Button';

const Header = () => {

    return (
        <Container>
            <NavHeader>
                <Rectangle primary>
                    <a href="#"><img src={Logo} alt="Logo da empresa"/></a>
                </Rectangle>

                <MoreInfo>
                    <Button href="links">
                        Mais informações
                    </Button>

                    <img src={imgInfo} alt=""/>
                </MoreInfo>
            </NavHeader>
        </Container>
        
    )
};

export default Header;