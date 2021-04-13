import React from 'react';

import Rectangle from '../../../../core/components/Rectangle'
import TwoSquadsBackground from '../../../../core/components/TwoSquadsBackground'

import styleImg from '../../../../core/assets/business2.png'
import prosImg from '../../../../core/assets/pros-and-cons/positive.png'
import consImg from '../../../../core/assets/pros-and-cons/negative.png'

import {
    Container,
    ContentTitle,
    ContentDescription,
    ContentSubtitle,
    ContentInfo,
    ContentProsAndCons,
    Pros,
    Cons,
    BackgroundDetails,
} from './styles';

const ProsAndCons = () => {
    return (
        <Container>
            <Rectangle>
                <img src={styleImg} alt="Uma rapaz escalando uma montanha"/>
            </Rectangle>

            <BackgroundDetails>
                <TwoSquadsBackground/>
            </BackgroundDetails>

            <ContentInfo data-aos="fade">
                <ContentTitle>
                    Lorem Ipsum is simply dummy text of THE 
                </ContentTitle>

                <ContentDescription>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and 
                    praising pain was born and I will give you a complete account 
                </ContentDescription>

                <ContentSubtitle>
                    THE OF simply dummy text of THE?
                </ContentSubtitle>
            </ContentInfo>

            <ContentProsAndCons>
                <Pros data-aos="fade-up">
                    <img src={prosImg} alt="Símbolo significando algo positivo."/>
                    <p>
                        consequuntur magni dolores eos qui ratione voluptatem sequi 
                        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                    </p>
                </Pros>

                <Cons data-aos="fade-down" data-aos-duration={1000}>
                    <img src={consImg} alt="Símbolo significando algo negativo."/>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure 
                        and praising pain was born and I will
                    </p>
                </Cons>
            </ContentProsAndCons>
        </Container>
    )
}

export default ProsAndCons;