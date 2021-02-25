import React from 'react';

import Rectangle from '../../../../core/components/Rectangle';

import infoImg from '../../../../core/assets/business2.png'

import {
    Container,
    Content,
    Grid,
    ContentTitle,
    ContentDescription,
} from './styles';

const SecondInfo = () => {
    return (
        <Container>
            <Content>
                <ContentTitle>
                    <Rectangle>
                        <img src={infoImg} alt=""/>
                    </Rectangle>

                    <h2>containing Lorem Ipsum passages</h2>
                </ContentTitle>

                <ContentDescription>
                    <p>
                        Letraset sheets containing Lorem Ipsum passages, and more recently with 
                        desktop publishing software like Aldus PageMaker including versions of Lorem 
                        IpsumLetraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </ContentDescription>
                
            </Content>

            <Grid>

            </Grid>
        </Container>
    )
};

export default SecondInfo;