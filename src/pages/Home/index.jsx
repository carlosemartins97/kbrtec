import React, { useEffect } from 'react';

import SubscriptionModal from '../../core/components/SubscriptionModal';

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
import Footer from './components/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';
import {
    Container,
} from './styles';
import { useState } from 'react';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal(){
        setIsModalOpen(true)
    }

    function handleCloseModal(){
        setIsModalOpen(false)
    }

    useEffect(() => {
        Aos.init({duration: 1000, delay:200});
    },[])
    return (
        <Container>
            <Header onOpenModal={handleOpenModal}/>
            <SubscriptionModal 
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
            />

            <About />

            <FirstDivider />

            <FirstInfo/>

            <YearsInfo />

            <SecondInfo />

            <SecondDivider />

            <RegistrationSteps />

            <VersionDetails />

            <PriceDetails />

            <FeedbackAndPartners />

            <ProsAndCons />

            <Video />

            <Footer />

        </Container>
        
    )
};

export default Home;