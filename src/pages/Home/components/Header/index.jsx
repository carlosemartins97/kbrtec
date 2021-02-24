import React from 'react';

import Rectangle from '../../../../core/components/Rectangle';

import Logo from '../../../../core/assets/logo1.png'
import imgInfo from '../../../../core/assets/moreinfo.png'

import Button from '../../../../core/components/Button';

import {
    Container,
    MoreInfo,
    NavHeader,
    ContentHeader,
    ContentText,
    ContentImage,
    RectangleImage,
} from './styles';


const Header = () => {

    return (
        <Container>
            <NavHeader>
                <Rectangle >
                    <a href="/"><img src={Logo} alt="Logo da empresa"/></a>
                </Rectangle>

                <MoreInfo>
                    <Button href="/">
                        Mais informações
                    </Button>

                    <img src={imgInfo} alt=""/>
                </MoreInfo>
            </NavHeader>
            <ContentHeader>
                <ContentText>
                    <h1>
                        standard Lorem Ipsum <br/>
                        <span>Excepteur sint occaec</span> <br/>
                        Lorem ipsum dolor sit ame <br/>
                        onsectetur adipiscing elit <br/>
                        dolore eu fugiat nulla pariatur!
                    </h1>

                    <p>
                    popularised in the 1960s with the release of Letraset sheets containing <br/>
                    Lorem Ipsum passages, and more recently with desktop publishing <br/> 
                    software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>

                    <Button href="/"> 
                        Lorem ipsum idolor
                    </Button>
                </ContentText>

                <ContentImage>

                    <Rectangle /> 
                    <RectangleImage/>
                    <Rectangle />

                </ContentImage>
            </ContentHeader>       
        </Container>
        
    )
};

export default Header;