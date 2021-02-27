import styled from 'styled-components';

import divisorImg from '../../assets/divisor.png'

export const Container = styled.div`
    background: url(${divisorImg});
    background-repeat: repeat;
    background-blend-mode: exclusion;
    min-height: 400px;
    background-color: ${props => props.theme.colors.black};
    
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 1024px){
        flex-direction: column;
        height: 100%;
        padding: 30px 20px;
    }
`;
