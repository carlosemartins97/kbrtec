import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex: 1;

    height: 1300px;

    h2 {
        font-family: 'Oswald';
        font-size: 25px;
        line-height: 37px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

     h2, span {
        width: 400px;
    }

     span {
        color: ${props => props.theme.colors.secondary};
        padding-left: 20px;
    }

    a {
        background: ${props => props.theme.colors.secondary};
        width: 400px;
        text-align: center;
    }
`;