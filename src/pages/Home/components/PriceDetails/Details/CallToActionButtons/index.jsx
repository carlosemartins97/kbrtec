import React from 'react';

import {
    Container,
    FirstOfferButton,
    SecondOfferButton,
    OfferText,
    OfferPrice,
} from './styles';

const CallToActionButtons = () => {
    return (
        <Container>

            <FirstOfferButton data-aos="slide-right">
                <OfferText>Lorem Ipsum has been the industry's</OfferText>
                <OfferPrice>R$24.997,00</OfferPrice>
            </FirstOfferButton>

            <SecondOfferButton data-aos="slide-left">
                <small>ou</small>
                <OfferPrice>R$15.000,00</OfferPrice>
                <OfferText>Ipsum has been the industry's standard dummy text ever since the 15000.</OfferText>
            </SecondOfferButton>

        </Container>
    )
}

export default CallToActionButtons;