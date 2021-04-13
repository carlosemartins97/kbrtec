import React from 'react';

import LeftContent from './LeftContent';
import RightContent from './RightContent';

import {
    Container,

} from './styles';

const VersionDetails = () => {
    return (
        <Container>
            <LeftContent/>

            <RightContent />
        </Container>
    )
}

export default VersionDetails;