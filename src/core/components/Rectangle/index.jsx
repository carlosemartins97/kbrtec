import React from 'react';

import {
    Container
} from './styles';

const Rectangle = ({children}) => {
      
    return (
        <Container>
            {children}
        </Container>
        
    )
};

export default Rectangle;