import React from 'react';

import infoImg from '../../../../core/assets/business1.png'

import {
    Container,
    LeftContent,
    RightContent,

} from './styles';

const FirstInfo = () => {
    return (
        <Container>

            <LeftContent>
                <p>
                    to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                    Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </LeftContent>

            <RightContent>
                <p>
                    specimen book. It has survived not only fiver...
                </p>

                <img src={infoImg} alt="Foto de um rapaz construindo seu caminho."/>
            </RightContent>

        </Container>
    );
};

export default FirstInfo;

