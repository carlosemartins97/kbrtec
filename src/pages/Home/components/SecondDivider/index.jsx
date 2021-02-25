import React from 'react';

import Divisor from '../../../../core/components/Divisor';
import Button from '../../../../core/components/Button';


import {
    ButtonArea,
    TextArea
} from './styles';

const SecondDivider = () => {
    return (
        <Divisor>
            <TextArea>
                <h2>
                    Versions of Lorem Ipsum Letraset sheets 
                    <span> publishing software like ?</span>
                </h2>
                <p>
                    Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem IpsumLetraset
                </p>
            </TextArea>

            <ButtonArea>
                <Button href="/">
                    containing Lorem Ipsum passages
                </Button>
            </ButtonArea>

        </Divisor>
    )
}

export default SecondDivider;