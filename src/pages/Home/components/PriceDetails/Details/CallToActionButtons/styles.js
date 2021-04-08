import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Fira Sans';
    
    width: 100%;

    padding-top: 130px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 770px){
        flex-direction: column;
    }
`;

export const FirstOfferButton = styled.a`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    padding: 0 20px;
    margin: 0 5px;
    
    max-width: 600px;
    height: 200px;
    background: ${props => props.theme.colors.warning};
    border-radius: 20px;

    transition: transform 0.2s;

    &:hover {
        transform: scaleY(1.1);
    }

    @media(max-width: 770px){
        margin-bottom: 20px;
    }
    @media(max-width: 550px){
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;


export const SecondOfferButton = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 3px solid ${props => props.theme.colors.warning};
    box-sizing: border-box;
    border-radius: 20px;

    padding: 0 20px;
    margin: 0 5px;

    max-width: 600px;
    height: 200px;

    transition: transform 0.2s;

    > span {
        color: ${props => props.theme.colors.warning};
    }

    > :last-child {
        font-weight: 300;
        font-size: 18px;
        line-height: 136.5%;

        color: ${props => props.theme.colors.black};
    }
    

    &:hover {
        transform: scaleY(1.1);
    }

    @media(max-width: 550px){
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;

export const OfferPrice = styled.span`
    font-family: 'Oswald';
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 0.1em;

    color: ${props => props.theme.colors.white};
`;

export const OfferText = styled.span`
    max-width: 250px;

    color: ${props => props.theme.colors.white};
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
`;