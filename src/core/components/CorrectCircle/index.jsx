import React from 'react';
import Rectangle from '../Rectangle';

import correctImg from '../../assets/correct.png';

import {
    Container
} from './styles';

const CorrectCircle = () => {
      
    return (
        <Container>
            <Rectangle>
                <img src={correctImg} alt="Foto de um símbolo positivo."/>
            </Rectangle>
        </Container>
        
    )
};

export default CorrectCircle;