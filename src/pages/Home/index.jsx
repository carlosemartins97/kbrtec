import React from 'react';

import About from './components/About';

import Header from './components/Header';
import FirstInfo from './components/FirstInfo';
import FirstDivider from './components/FirstDivider';
import YearsInfo from './components/YearsInfo';
import SecondInfo from './components/SecondInfo';
import SecondDivider from './components/SecondDivider';
import RegistrationSteps from './components/RegistrationSteps';
import VersionDetails from './components/VersionDetails';
import PriceDetails from './components/PriceDetails';
import FeedbackAndPartners from './components/FeedbackAndPartners';
import ProsAndCons from './components/ProsAndCons';
import Video from './components/Video';

import {
    Container,
} from './styles';



const Home = () => {
    return (
        <Container>
            <Header />

            <About />

            <FirstDivider />

            <FirstInfo />

            <YearsInfo />

            <SecondInfo />

            <SecondDivider />

            <RegistrationSteps />

            <VersionDetails />

            <PriceDetails />

            <FeedbackAndPartners />

            <ProsAndCons />

            <Video />

        </Container>
        
    )
};

export default Home;