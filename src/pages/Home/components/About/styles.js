import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex: 1;
`;

export const ImgContainer = styled.div`
    border-radius: 13px;
    margin-left: 200px;
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

