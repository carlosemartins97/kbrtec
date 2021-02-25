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

