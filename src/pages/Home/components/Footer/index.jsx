import React from 'react';

import Logo from '../../../../core/assets/logo1.png';
import kbrtecLogo from '../../../../core/assets/kbrteclogo.png';

import {
    Container,
    Content,
    Address,
    Design
} from './styles';

const Footer = () => {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="Logo da empresa"/>

                <Address>
                    <p>Copyright © 2019 - Avaliação KBRTEC Fevereiro de 2021</p>
                    <address>Av. Senador Feijó, 686 - Vila Matias, Santos - SP, 11015-504</address>
                </Address>

                <Design>
                    <span>Design by</span>
                    <img src={kbrtecLogo} alt=""/>
                </Design>
            </Content>
        </Container>
    )
}

export default Footer;