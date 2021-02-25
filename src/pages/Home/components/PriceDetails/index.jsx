import React from 'react';

import Details from './Details';
import Header from './Header';

import {
    Container
} from './styles';

const PriceDetails = () => {
    return (
        <Container>
            <Header />

            <Details />
        </Container>
    )
}

export default PriceDetails;