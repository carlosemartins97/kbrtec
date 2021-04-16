import styled from 'styled-components';

export const Container = styled.section`
    font-family: 'Oswald';

    width: 100%;
    display: flex;

    position: relative;

    p {
        padding: 30px 0;
    }
    @media(max-width: 770px){
        flex-direction: column;
    }
`;

export const Feedback = styled.div`
    position: relative;
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
    height: 100%;
    max-height: 630px;

    overflow: hidden;
    
    > img {
        padding: 10px 0;
    }
    div {
        display: flex;
        flex-direction: column;

        position: absolute;
        right: 0;
        bottom: 40%;
        >:first-child {
            width: 60px;
            height: 65px;
            background: linear-gradient(210deg, ${props => props.theme.colors.gradient.secondary}, ${props => props.theme.colors.gradient.primary});

            transition: filter 0.3s;

            &:hover {
                filter: brightness(0.8);
            }
        }

        >:last-child {
            width: 60px;
            height: 65px;
            background: ${props => props.theme.colors.secondary};
            transition: filter 0.3s;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
    @media(max-width: 1465px){
            text-align:center;
        }
`;

export const PartnersArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 0px;
    grid-column-gap: 20px;

    > :nth-child(3n + 2){
        margin-top: 60px;
    }

    > :nth-child(7){
        grid-column: 2 / 3;
        margin-top: 60px;
    }

    > :nth-child(8){
        margin-top: 0px;
    }

    

    @media(max-width: 1465px){
        grid-template-columns: repeat(1, 1fr);
        justify-items:center;
        grid-row-gap: 10px;
        grid-column-gap: 0;

        > :nth-child(3n + 2){
             margin-top: 0px;
        }

        > :nth-child(7){
            grid-column: unset;
            margin-top: 0px;
        }

        > :nth-child(8){
            margin-top: 0px;
        }
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

    transition: transform 0.3s;

    &:hover {
        transform: translateY(-20px);
    }

    @media(max-width: 1465px){
        width: 100%;
        height: 125px;

        transition: transform 0.3s;

        &:hover {
            transform: translateX(20px);
        }
    }
`;

export const BackgroundDetails = styled.div`
    > :first-child {
        border-radius: 20px;

        position: absolute;
        right: 3%;
        top: -3%;

        @media(max-width: 770px){
            top: -2%;
        }
    }
`;




