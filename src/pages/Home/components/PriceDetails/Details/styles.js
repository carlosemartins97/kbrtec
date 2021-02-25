import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Fira Sans';

    background: linear-gradient(180deg, rgba(25, 112, 129, 0.1) -3.79%, rgba(247, 247, 249, 0) 32.02%);
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-bottom: 120px;

    > a {
        padding: 0 70px;
    }
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

export const ContentDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    margin-top: 100px;
    margin-bottom: 100px;

    p {
        font-weight: 300;
        font-size: 18px;
        line-height: 136.5%;
    }

    h3 {
        font-weight: 500;
        font-size: 27px;
        line-height: 136.5%;
    }
`;
export const DescriptionDetails = styled.div`
    width: 600px;
    margin-right: 20px;

    > h2 {
        font-family: 'Oswald';
        font-size: 25px;
        line-height: 30px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    > p {
        padding: 35px 0;
    }
`;
export const ExamplesDetails = styled.div`
    width: 600px;
    margin-left: 20px;

    > p {
        font-weight: bold;
    }
`;
export const ExamplesList = styled.ul`
    list-style: none;

`;
export const ExampleItem = styled.li`
    display: flex;
    align-items: center;

    margin: 50px 0;

    > p {
        margin-left: 10px;
    }
`;

