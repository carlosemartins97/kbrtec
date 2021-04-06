import React, { useState } from 'react';

import Modal from 'react-modal';

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
    Main,
    RectangleImage,
    RectangleBackgrounds,
    RectangleWhiteBackground,
} from './styles';
import TwoSquadsBackground from '../../../../core/components/TwoSquadsBackground';


const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal(){
        setIsModalOpen(true)
    }

    function handleCloseModal(){
        setIsModalOpen(false)
    }

    return (
        <Container>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
            >
                <h2>Cadastrar</h2>
            </Modal>

            <NavHeader>
                <Rectangle >
                    <a href="/"><img src={Logo} alt="Logo da empresa"/></a>
                </Rectangle>

                <MoreInfo>
                    <button
                        type="button"
                        onClick={handleOpenModal}
                    >
                        Mais informações
                    </button>

                    <img src={imgInfo} alt=""/>
                </MoreInfo>

                

            </NavHeader>

            <ContentHeader>
                <TwoSquadsBackground />
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

                    <Main>
                        <RectangleImage/>
                        <RectangleBackgrounds>

                            <Rectangle /> 
                            <RectangleWhiteBackground>
                                <Rectangle />
                            </RectangleWhiteBackground>
                            <Rectangle />
                            
                        </RectangleBackgrounds>
                    </Main>

                </ContentImage>

            </ContentHeader>       
        </Container>
        
    )
};

export default Header;