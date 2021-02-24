import styled from 'styled-components';

export const Container = styled.a`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 60px;

    letter-spacing: 0.1em;
    text-transform: uppercase;

    background: linear-gradient(
            ${props => props.theme.colors.gradient.secondary}, 
            ${props => props.theme.colors.gradient.primary}
        );
    
    border-radius: 30px;
    
    padding: 0 20px;



`;