import React from 'react';

import {
    Container
} from './styles';

const Button = ({children, href}) => {
    return (
        <Container href={href}>
            {children}
        </Container>
    )
};

export default Button;