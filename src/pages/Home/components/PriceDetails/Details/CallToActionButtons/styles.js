import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Fira Sans';
    
    width: 100%;

    padding-top: 130px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FirstOfferButton = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-right: 10px;
    padding: 0 20px;
    
    width: 600px;
    height: 130px;
    background: ${props => props.theme.colors.warning};
    border-radius: 20px;

    &:hover {
        transition: opacity .3s;
        opacity: .7;
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
    margin-left: 10px;

    width: 600px;
    height: 130px;

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
        transition: opacity .3s;
        opacity: .5;
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
    width: 250px;

    color: ${props => props.theme.colors.white};
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
`;