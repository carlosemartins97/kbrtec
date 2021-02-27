import React from 'react';

import {
    Container
} from './styles';

import Rectangle from '../Rectangle';

const TwoSquadsBackground = () => {
    return (
        <Container>
            <Rectangle/>
            <Rectangle/>
            <Rectangle/>
        </Container>
    )
}

export default TwoSquadsBackground;