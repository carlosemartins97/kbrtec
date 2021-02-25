import React from 'react';

import Rectangle from '../../../../../core/components/Rectangle';
// import Button from '../../../../../core/components/Button';
import correctImg from '../../../../../core/assets/correct2.png';

import {
    Container,
    FormationContainer,
    Formation,
    FormationTitle,
    FormationPrice,
    FormationSubtitle,
} from './styles';
import CallToActionButtons from './CallToActionButtons';

const Details = () => {

    const allFormationsInfo = [
        {title: 'Formação como Coach', price: '7.000', subtitle:'(8 dias)'},
        {title: 'Formação em Coaching Express', price: '8.000'},
        {title: 'Formação em Oratória e Curso de Palestrante', price: '2.497'},
        {title: 'Uma formação em consultoria em gestão', price: '4.000', subtitle:'(16 horas)'},
        {title: 'Programas de formação e treinamento corporativo', price: '3.500', subtitle:'(16 horas)'},
    ]

    return (
        <Container>
            <FormationContainer>
            {
                allFormationsInfo.map(item => {
                    return (
                        <Formation key={item.title}>
                            <Rectangle><img src={correctImg} alt="Foto de um símbolo positivo."/></Rectangle>

                            <FormationTitle>
                                {item.title}
                            </FormationTitle>

                            <FormationSubtitle>
                                {item.subtitle}
                            </FormationSubtitle>

                            <FormationPrice>
                                {item.price}
                            </FormationPrice>
                        </Formation>
                    )
                })
            }
            </FormationContainer>

            <CallToActionButtons />

        </Container>
    )
}

export default Details;