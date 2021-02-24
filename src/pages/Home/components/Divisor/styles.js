import styled from 'styled-components';

import divisorImg from '../../../../core/assets/divisor.png'

export const Container = styled.div`
    background: url(${divisorImg});
    background-repeat: no-repeat;
    background-blend-mode: exclusion;
    height: 400px;
    background-color: ${props => props.theme.colors.black};

    display: flex;
    align-items: center;
    justify-content: center;
`;