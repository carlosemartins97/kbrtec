import React from 'react';

import moneyImg from '../../../../../core/assets/money1.png'
import Rectangle from '../../../../../core/components/Rectangle'


import {
    Container,
    ContentTitle,
    ContentSubtitle,
    ContentInfo,
    ContentFooter,
    DoubleQuotes,
} from './styles';

const Header = () => {

    return (
        <Container data-aos-duration={800} data-aos="fade">
            <Rectangle>
                <img src={moneyImg} alt="Foto de uma mão com uma moeda"/>
            </Rectangle>

            <ContentTitle>
                Investimento
            </ContentTitle>

            <ContentSubtitle>
                Lorem Ipsum is simply dummy text of the print
            </ContentSubtitle>

            <ContentInfo data-aos="slide-left">
                <DoubleQuotes>"</DoubleQuotes>
                    Software like Aldus PageMaker including versions of 
                    Lorem Ipsum. 
                <DoubleQuotes>"</DoubleQuotes>
            </ContentInfo>

            <ContentFooter data-aos="slide-right">
                Noodel text, and a search for 'lorem ipsum' will uncover 
                many web
            </ContentFooter>
        </Container>
    )
}

export default Header;