import styled from 'styled-components';

export const Container = styled.div`
    width: 100px;
    height: 100px;

    background: ${props => props.theme.colors.secondary};

    transform: rotate(-45deg);

`;