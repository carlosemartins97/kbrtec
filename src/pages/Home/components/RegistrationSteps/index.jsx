import React from 'react';

import Rectangle from '../../../../core/components/Rectangle';
import Button from '../../../../core/components/Button';

import {
    Container,
    ContentTitle,
    ContentSteps,
    Step,
    Description,
    Subscribe,
    LeftBackgroundDetails,
    RightBackgroundDetails
} from './styles';
import TwoSquadsBackground from '../../../../core/components/TwoSquadsBackground';

const RegistrationSteps = () => {

    const allSetps = [
        {stepNumber: 1, stepDescription: 'Sed ut perspiciatis unde omnis iste natus error', delay: 0},
        {stepNumber: 2, stepDescription: 'mistaken idea of denouncing', delay: 150},
        {stepNumber: 3, stepDescription: 'or again is there anyone who loves', delay: 300},
        {stepNumber: 4, stepDescription: 'ursues or desires to obtain pain of itself', delay: 450},
        {stepNumber: 5, stepDescription: 'ursues or desires to obtain pain of itself', delay: 600},
        {stepNumber: 6, stepDescription: 'Sed ut perspiciatis unde omnis iste natus error', delay: 750},
        {stepNumber: 7, stepDescription: 'mistaken idea of denouncing', delay: 900},
    ]

    return (
        <Container>
            <LeftBackgroundDetails>
                <TwoSquadsBackground />
            </LeftBackgroundDetails>

            <ContentTitle data-aos="slide-right" data-aos-duration={800}>
                Etapas da Inscrição
            </ContentTitle>

            <ContentSteps>
                {
                    allSetps.map(item => {
                        return (
                            <Step key={item.stepNumber} data-aos="fade-down" data-aos-delay={item.delay}>
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
                <Subscribe data-aos="zoom-in-up" data-aos-delay={1000}>
                    <Button>
                        Inscreva-se
                    </Button>
                    <TwoSquadsBackground />
                </Subscribe>
            </ContentSteps>
            
            <RightBackgroundDetails>
                <Rectangle />
            </RightBackgroundDetails>
            
        </Container>
    )
}

export default RegistrationSteps;