import React from 'react';

import Rectangle from '../../../../../core/components/Rectangle';
import Button from '../../../../../core/components/Button';
import correctImg from '../../../../../core/assets/correct2.png';

import {
    Container,
    FormationContainer,
    Formation,
    FormationTitle,
    FormationPrice,
    FormationSubtitle,
    ContentDetails,
    DescriptionDetails,
    ExamplesDetails,
    ExamplesList,
    ExampleItem,


} from './styles';
import CallToActionButtons from './CallToActionButtons';
import CorrectCircle from '../../../../../core/components/CorrectCircle';

const Details = () => {

    const allFormationsInfo = [
        {title: 'Formação como Coach', price: '7.000', subtitle:'(8 dias)'},
        {title: 'Formação em Coaching Express', price: '8.000'},
        {title: 'Formação em Oratória e Curso de Palestrante', price: '2.497'},
        {title: 'Uma formação em consultoria em gestão', price: '4.000', subtitle:'(16 horas)'},
        {title: 'Programas de formação e treinamento corporativo', price: '3.500', subtitle:'(16 horas)'},
    ]

    const allExamplesList = [
        {example: 'Roots in a piece of classical Latin literature from 45 BC, making it over'},
        {example: 'Many variations of passages of Lorem Ipsum available '},
        {example: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'},
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

            <ContentDetails>
                <DescriptionDetails>
                    <h2>Lorem Ipsum is therefore</h2>

                    <p>
                        is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>

                    <p>
                        is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard 
                    </p>

                    <p>
                        Remaining essentially unchanged. It was popularised in the 1960s with 
                        the release of Letraset sheets containing Lorem Ipsum passages, and more 
                    </p>

                    <h3>Roots in a piece of classical Latin literature from</h3>
                </DescriptionDetails>

                <ExamplesDetails>
                    <p>
                        Web sites still in their infancy. Various versions have evolved over the years, sometimes
                    </p>

                    <ExamplesList>
                        {allExamplesList.map(item => {
                            return (
                                <ExampleItem key={item.example}>
                                    <CorrectCircle /> <p>{item.example}</p>
                                </ExampleItem>
                            )
                        })}
                    </ExamplesList>

                    <h3>The theory of ethics, very popular during the Renaissance.</h3>
                </ExamplesDetails>

            </ContentDetails>

            <Button>
                Standard Lorem Ipsum
            </Button>

        </Container>
    )
}

export default Details;