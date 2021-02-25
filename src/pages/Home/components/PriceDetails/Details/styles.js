import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Fira Sans';

    background: linear-gradient(180deg, rgba(25, 112, 129, 0.1) -3.79%, rgba(247, 247, 249, 0) 32.02%);
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

export const Formation = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 50px;


    > :first-child {
        border-radius: 50%;

        width: 90px;
        height: 90px;

        display: flex;
        align-items: center;
        justify-content: center;
        > img {
            transform: rotate(45deg);

            border-radius: 50%;
            border: 1px solid #00AA54;
            box-sizing: border-box;
            box-shadow: 0px 2px 5px rgba(0, 170, 84, 0.75);

            padding: 15px;
        }
    }

`;

export const FormationTitle = styled.h4`
    width: 200px;

    text-align: center;

    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    padding-top: 20px;
`;

export const FormationSubtitle = styled.span`
    padding-top: 5px;

    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.gradient.secondary};

`;

export const FormationPrice = styled.h2`
    padding-top: 10px;

    font-family: 'Oswald';
    font-size: 25px;

    line-height: 37px;

    text-transform: uppercase;
`;

export const CallToActionButtons = styled.div`
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