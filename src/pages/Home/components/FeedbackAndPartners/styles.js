import styled from 'styled-components';

export const Container = styled.section`
    font-family: 'Oswald';

    width: 100%;
    display: flex;

    p {
        padding: 30px 0;
    }
    @media(max-width: 770px){
        flex-direction: column;
    }
`;

export const Feedback = styled.div`
    width: 100%;
    background: #171717;

    padding-right: 200px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media(max-width: 1465px){
        padding: 0 20px;
        justify-content: center;
    }
`;

export const Partners = styled.div`
    width: 100%;
    background: linear-gradient(220.36deg, rgba(25, 112, 129, 0.1) 0%, rgba(247, 247, 249, 0) 64.63%);

    padding-left: 200px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    h2, p {
        color: ${props => props.theme.colors.black};
    }

    @media(max-width: 1465px){
        padding: 0 20px;
        justify-content: center;
    }
`;

export const Content = styled.div`
    max-width: 500px;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 100px 0;
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.white};

    font-size: 25px;
    line-height: 37px;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    @media(max-width: 770px){
        text-align: center;
    }
`;


export const Description = styled.p`
    color: ${props => props.theme.colors.secondary};

    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
`;

export const VideoArea = styled.div`
    display: flex;
    flex-direction:  column;
    justify-content: center;
    
    > img {
        padding: 10px 0;
    }
    @media(max-width: 1465px){
            text-align:center;
        }
`;

export const PartnersArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 100px;
    grid-column-gap: 50px;

    @media(max-width: 1465px){
        grid-template-columns: repeat(1, 1fr);
        justify-items:center;
        grid-row-gap: 10px;
        grid-column-gap: 0;
    }

`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;

    background: ${props => props.theme.colors.white};
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    width: 150px;
    height: 180px;

    @media(max-width: 1465px){
        width: 100%;
        height: 125px;
    }
`;




