import styled from 'styled-components';

import divisorImg from '../../assets/divisor.png'

export const Container = styled.div`
    background: url(${divisorImg});
    background-repeat: repeat;
    background-blend-mode: exclusion;
    height: 100%;
    background-color: ${props => props.theme.colors.black};
    

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 770px){
        flex-direction: column;
        height: 100%;
        padding: 30px 30px;
    }
`;
