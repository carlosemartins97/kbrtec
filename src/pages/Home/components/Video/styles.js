import styled from 'styled-components';

export const Container = styled.section`
    background: linear-gradient(180deg, rgba(23, 23, 23, 1) 0%, #000 100%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        color: #fff;
        margin-bottom: 30px;
        &:visited {
            color: #fff;
        }
    }
`;

export const ContentTitle = styled.h2`
    max-width: 670px;
    padding: 0 20px;

    margin: 100px 0;

    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.2em;

    color: ${props => props.theme.colors.white};
    @media(max-width: 550px){
        margin-top: 100px;
        margin-bottom: 20px;
    }

    
`;

export const IframeTag = styled.iframe`
    width: 1150px;
    height: 650px;

    margin-bottom: 100px;

    @media(max-width: 1024px){
        width: 770px;
        height: 435px;
    }
    @media(max-width: 770px){
        width: 575px;
        height: 325px;
        
    }
    @media(max-width: 550px){
        width: 475px;
        height: 275px;
        margin-bottom: 50px;
    }
    @media(max-width: 500px){
        width: 99%;
        height: 250px;
    }

`;