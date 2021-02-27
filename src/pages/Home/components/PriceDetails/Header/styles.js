import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Oswald';
    letter-spacing: 0.2em;

    position: relative;
    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    > :first-child {
        width: 180px;
        height: 180px;

        margin-bottom: 100px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 34px;

        > img {
            transform: rotate(45deg);
        }
    }

    @media(max-width: 770px){
        padding: 50px 20px;
    }
`;

export const ContentTitle = styled.h2`
    font-size: 25px;
    line-height: 37px;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    padding-bottom: 20px;

`;


export const ContentSubtitle = styled.h3`
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    text-transform: uppercase;

    padding-bottom: 40px;
`;


export const ContentInfo = styled.cite`
    font-family: 'Fira Sans';
    font-style: italic;
    font-size: 20px;
    line-height: 136.5%;
    text-align: center;

    padding-bottom: 115px;

    @media(max-width: 770px){
        font-size: 15px;
    }
`;


export const ContentFooter = styled.span`
    font-family: 'Fira Sans';
    font-size: 20px;
    line-height: 136.5%;

    text-align: center;
    padding-bottom: 110px;
`;

export const DoubleQuotes = styled.span`
    font-family: 'Spirax';
    font-size: 100px;
    line-height: 122px;
    text-transform: uppercase;

    color: #197081;

    @media(max-width: 770px){
        font-size: 50px;
        line-height: 50px;
    }
`;

