import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex: 1;

    h2 {
        font-family: 'Oswald';
        font-size: 25px;
        line-height: 37px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

     h2, span {
        max-width: 400px;
        width: 400px;

        @media(max-width: 500px){
            max-width: 350px;
            width: 350px; 
        }
    }

     span {
        color: ${props => props.theme.colors.secondary};
        padding-left: 20px;
    }

    a {
        background: ${props => props.theme.colors.secondary};
        max-width: 450px;
        text-align: center;
        @media(max-width: 500px){
            max-width: 350px;
            width: 350px; 
        }
    }

    @media(max-width: 770px){
        flex-direction: column;
    }
`;