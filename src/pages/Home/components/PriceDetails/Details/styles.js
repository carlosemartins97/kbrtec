import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Fira Sans';

    background: linear-gradient(180deg, rgba(25, 112, 129, 0.1) -3.79%, rgba(247, 247, 249, 0) 32.02%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 20px 120px 20px;

    > a {
        padding: 0 70px;
        @media(max-width: 500px){
            padding: 0 20px;
        }
    }

    @media(max-width: 770px){
        padding: 50px 20px;
    }
`;

export const FormationContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;

    @media(max-width: 1000px){
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 20px;
    }
`;

export const Formation = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    transition: color 0.3s;


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

    &:hover {
        border-bottom: 2px solid ${props => props.theme.colors.secondary};
        cursor: pointer;
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
    font-size: 25px;
    line-height: 37px;
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

    @media(max-width: 550px){
        flex-direction: column;
    }
`;
export const DescriptionDetails = styled.div`
    max-width: 600px;
    margin-right: 20px;

    > h2 {
        font-size: 25px;
        line-height: 30px;
    }

    > p {
        padding: 35px 0;
    }
    @media(max-width: 550px){
        padding-bottom: 20px;
    }
`;
export const ExamplesDetails = styled.div`
    max-width: 600px;
    margin-left: 20px;

    > p {
        font-weight: bold;
    }

    @media(max-width: 550px){
        margin-left: 0;
    }
`;
export const ExamplesList = styled.ul`
    list-style: none;

`;
export const ExampleItem = styled.li`
    display: flex;
    align-items: center;

    margin: 50px 0;

    transition: transform 0.2s;

    > p {
        margin-left: 10px;
    }

    &:hover {
        transform: translateX(15px);
    }
    
`;

