import styled from 'styled-components';

export const Container = styled.section`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

export const ImgContainer = styled.div`
    border-radius: 13px;
`;

export const TextContainer = styled.div`
    margin-left: 90px;
    margin-top: 20px;
    
    max-width: 600px;
`;

export const Title = styled.h1`
    font-family: Oswald;
    font-weight: 200;
    font-size: 25px;
    line-height: 37px;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    > span {
        font-family: 'Oswald';
        font-weight: bold;
        font-size: 25px;
        line-height: 37px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

`;


export const Subtitle = styled.p`
    margin: 20px 0;
    font-family: 'Oswald';
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
`;


export const Description = styled.p`
    font-family: Fira Sans;
    font-size: 15px;
    line-height: 180%;

    >span {
        font-family: Fira Sans;
        font-size: 15px;
        line-height: 180%;
        font-weight: bold;
    }
`;

export const Social = styled.div`
    margin: 50px 0 100px 50px;
    
    img {
        background: linear-gradient(60deg,
            ${props => props.theme.colors.gradient.primary} -68%, 
            ${props => props.theme.colors.gradient.secondary} 104%
        );
        

        border-radius: 100%;

        padding: 10px;
        margin: 0 10px;

        width: 40px;
    }
`;
