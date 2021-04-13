import React from 'react';

import Divider from '../../../../core/components/Divider';
import Button from '../../../../core/components/Button';

import {
    ButtonArea,
    TextArea
} from './styles';

const SecondDivider = () => {

    return (
        <Divider>
            <TextArea data-aos="fade-left">
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

            <ButtonArea data-aos="fade-right">
                <Button href="/">
                    containing Lorem Ipsum passages
                </Button>
            </ButtonArea>

        </Divider>
    )
}

export default SecondDivider;