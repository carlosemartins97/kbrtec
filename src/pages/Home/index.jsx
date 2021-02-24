import React from 'react';
import About from './components/About';

import Header from './components/Header';

import {
    Container
} from './styles';

const Home = () => {
    return (
        <Container>
            <Header />
            <About />
        </Container>
        
    )
};

export default Home;