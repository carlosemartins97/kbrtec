import React from 'react';
import TwoSquadsBackground from '../../../../core/components/TwoSquadsBackground';

import Details from './Details';
import Header from './Header';

import {
    Container,
    BackgroundDetails
} from './styles';

const PriceDetails = () => {
    return (
        <Container>
            <BackgroundDetails>
                <TwoSquadsBackground />
            </BackgroundDetails>

            <Header />

            <Details />
        </Container>
    )
}

export default PriceDetails;