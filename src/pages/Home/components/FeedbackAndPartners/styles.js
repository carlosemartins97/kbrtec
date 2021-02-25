import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Oswald';

    width: 100%;
    display: flex;

    p {
        padding: 30px 0;
    }
`;

export const Feedback = styled.div`
    width: 100%;
    background: #171717;

    padding-right: 200px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
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
`;

export const Content = styled.div`
    width: 500px;
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
    > img {
        padding: 10px 0;
    }
`;

export const PartnersArea = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 100px;
    grid-column-gap: 50px;

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
`;




