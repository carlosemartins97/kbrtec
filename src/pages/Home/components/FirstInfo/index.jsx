import React from 'react';

import infoImg from '../../../../core/assets/business1.png'

import {
    Container,
    LeftContent,
    RightContent,
} from './styles';

const FirstInfo = () => {
    return (
        <Container data-aos="fade-down">

            <LeftContent>
                <p>
                    to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                    Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </LeftContent>

            <RightContent>
                <h2>
                    specimen book. It has survived not only fiver...
                </h2>

                <img src={infoImg} alt="Foto de um rapaz construindo seu caminho."/>
            </RightContent>

        </Container>
    );
};

export default FirstInfo;

