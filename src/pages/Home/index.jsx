import React from 'react';
import About from './components/About';
import Divisor from './components/Divisor';

import Header from './components/Header';

import Logo from '../../core/assets/logo2.png';

import {
    Container,
    ImageArea,
    TextArea,
} from './styles';

const Home = () => {
    return (
        <Container>
            <Header />
            <About />
            <Divisor>
                <ImageArea>
                    <img src={Logo} alt="Logo da empresa"/>
                    <h2>
                        Lorem Ipsum <br />
                        Lorem Ipsum to <br />
                        make type book
                    </h2>
                </ImageArea>

                <TextArea>
                    <p>
                        <span>Lorem Ipsum</span> to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </TextArea>
            </Divisor>
        </Container>
        
    )
};

export default Home;