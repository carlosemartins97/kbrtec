import React from 'react';

import About from './components/About';

import FirstInfo from './components/FirstInfo';
import Header from './components/Header';
import YearsInfo from './components/YearsInfo';
import SecondInfo from './components/SecondInfo';
import FirstDivider from './components/FirstDivider';
import SecondDivider from './components/SecondDivider';
import RegistrationSteps from './components/RegistrationSteps';
import VersionDetails from './components/VersionDetails';
import PriceDetails from './components/PriceDetails';
import FeedbackAndPartners from './components/FeedbackAndPartners';

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

        </Container>
        
    )
};

export default Home;