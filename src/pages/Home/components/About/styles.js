import styled from 'styled-components';

export const Container = styled.section`
    margin-top: 100px;
    display: flex;
    justify-content: center;

    position: relative;

    padding: 20px;

    @media(max-width: 1024px){
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1, h2 {
            text-align: center;
        }
    }
`;

export const ImgContainer = styled.div`
    border-radius: 13px;
    z-index: 3;

    position: relative;

    > img {
        z-index: 3;
        position: relative;
    }
`;

export const TextContainer = styled.div`
    margin-left: 90px;
    margin-top: 20px;
    
    position: relative;
    z-index: 2;

    max-width: 600px;

    @media(max-width: 1024px){
        margin: 0;
        margin-bottom: 50px;
    }
`;

export const Title = styled.h1`

    font-weight: 200;
    font-size: 25px;
    line-height: 37px;

    > span {
        font-weight: bold;
        font-size: 25px;
    }

`;


export const Subtitle = styled.h2`
    margin: 20px 0;

    font-size: 18px;
    letter-spacing: 0.2em;
`;


export const Description = styled.p`
    line-height: 180%;

    >span {
        font-size: 15px;
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

        transition: transform 0.2s;

        &:hover {
            transform: scale(1.3);
        }
    }

    @media(max-width: 1024px){
        margin: 50px 0;
        display: flex;
        justify-content: center;
    }
`;

export const LeftBackgroundDetails = styled.div`

    >:first-child {
        width: 300px;
        height: 300px;
        border-radius: 30px;
        z-index: 1;
        position: absolute;
        left: -30%;
        top: 5%;
    }
`;

export const RightBackgroundDetails = styled.div`
    > :first-child{
        left: 90%;
        top: 0%;
        > :last-child {
            display: none;
        }
    }

`;
