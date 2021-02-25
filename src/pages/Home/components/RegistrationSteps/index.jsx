import React from 'react';

import Rectangle from '../../../../core/components/Rectangle';
import Button from '../../../../core/components/Button';

import {
    Container,
    ContentTitle,
    ContentSteps,
    Step,
    Description,
    Subscribe
} from './styles';

const RegistrationSteps = () => {

    const allSetps = [
        {stepNumber: 1, stepDescription: 'Sed ut perspiciatis unde omnis iste natus error'},
        {stepNumber: 2, stepDescription: 'mistaken idea of denouncing'},
        {stepNumber: 3, stepDescription: 'or again is there anyone who loves'},
        {stepNumber: 4, stepDescription: 'ursues or desires to obtain pain of itself'},
        {stepNumber: 5, stepDescription: 'ursues or desires to obtain pain of itself'},
        {stepNumber: 6, stepDescription: 'Sed ut perspiciatis unde omnis iste natus error'},
        {stepNumber: 7, stepDescription: 'mistaken idea of denouncing'},
    ]

    return (
        <Container>
            <ContentTitle>
                Etapas da Inscrição
            </ContentTitle>

            <ContentSteps>
                {
                    allSetps.map(item => {
                        return (
                            <Step key={item.stepNumber}>
                                <Rectangle>
                                    <span>.{item.stepNumber}</span>
                                </Rectangle>
                                <Description>
                                    {item.stepDescription}
                                </Description>
                            </Step>
                        )
                    })
                }
                <Subscribe>
                    <Button>
                        Inscreva-se
                    </Button>
                </Subscribe>
            </ContentSteps>
        </Container>
    )
}

export default RegistrationSteps;