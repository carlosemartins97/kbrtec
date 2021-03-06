import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    z-index: 0;
    left: -15%;
    > :first-child {
        position: absolute;
        top: 20%;
    }
    div {
        width: 400px;
        height: 400px;      
        background: unset;
        z-index: 0;
        
        border: 2px solid rgba(25, 112, 129, 0.3);
        border-radius: 50px;
    }
    > :last-child {
        background: ${props => props.theme.colors.secondary};

        width: 100px;
        height: 100px;

        position: absolute;
        border-radius: 20px;

        top: 60%;
        right: -7%;
    }

    @media(max-width: 1600px){
        left: -20%;
    }
    @media(max-width: 1500px){
        left: -25%;
    }
    @media(max-width: 1280px){
        left: -33%;
    }
    @media(max-width: 1024px){
        left: -40%;
    }
    @media(max-width: 900px){
        left: -50%;
    }
    @media(max-width: 700px){
        left: -75%;
    }
    @media(max-width: 450px){
        left: -100%;
    }
`;