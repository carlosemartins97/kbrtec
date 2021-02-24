import React from 'react';

import aboutImg from '../../../../core/assets/about.png'
import faceImg from '../../../../core/assets/facebook.png'
import instaImg from '../../../../core/assets/insta.png'
import twitterImg from '../../../../core/assets/twitter.png'

import {
    Container,
    ImgContainer,
    TextContainer,
    Title,
    Subtitle,
    Description,
    Social,
} from './styles';

const About = () => {
    return (
        <Container>
            <ImgContainer>
                <img src={aboutImg} alt="Foto da pessoa dona do site."/>
                <Social>
                    <img src={faceImg} alt="Foto da pessoa dona do site."/>
                    <img src={instaImg} alt="Foto da pessoa dona do site."/>
                    <img src={twitterImg} alt="Foto da pessoa dona do site."/>
                </Social>
            </ImgContainer>
            <TextContainer>
                <Title>Meu nome é <span>lorem ipsum</span></Title>

                <Subtitle>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum
                </Subtitle>

                <Description>
                    to make a type specimen book. It has survived not only 
                    five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged. It was 
                    popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more 
                    recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                    with desktop publishing software like Aldus PageMaker.
                    <br />   
                    <br />   
                    <span>
                        more recently with desktop
                    </span>
                </Description>

            </TextContainer>
            
        </Container>
    );
};

export default About;