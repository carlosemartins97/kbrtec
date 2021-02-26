import React from 'react';

import Rectangle from '../../../../core/components/Rectangle'

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
} from './styles';

const ProsAndCons = () => {
    return (
        <Container>
            <Rectangle>
                <img src={styleImg} alt="Uma rapaz escalando uma montanha"/>
            </Rectangle>

            <ContentInfo>
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
                <Pros>
                    <img src={prosImg} alt="Símbolo significando algo positivo."/>
                    <p>
                        consequuntur magni dolores eos qui ratione voluptatem sequi 
                        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                    </p>
                </Pros>

                <Cons>
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