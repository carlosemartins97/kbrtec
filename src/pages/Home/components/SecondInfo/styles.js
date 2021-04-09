import styled from 'styled-components';

export const Container = styled.section`
    padding: 100px 50px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 65px;
    margin-bottom: 50px;

    @media(max-width: 770px){
        flex-direction: column;
    }
`;

export const ContentTitle = styled.div`
    display: flex;
    justify-content:flex-end;
    align-items: center;
    flex: 1;

    transition: transform 0.3s;
    cursor: default;

    > :first-child {
        border-radius: 34px;
        width: 180px;
        height: 180px;

        display: flex;
        align-items: center;
        justify-content: center;

        > img {          
            transform: rotate(45deg);
        }
    }
    > h2 {
        width: 300px;
        margin: 0 100px;
        font-size: 25px;
        line-height: 37px;
    }

    &:hover {
        transform: scale(1.2);
    }

    @media(max-width: 1050px){
        flex-direction: column;

        > h2 {
            padding: 50px 0;
            text-align: center;
        }
    }
`;

export const ContentDescription = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex: 1;

    > p {
            width: 500px;
            line-height: 180%;
        }

    @media(max-width: 770px){
        text-align: center;
    }
`;

export const Grid = styled.div`

`;

export const GridTitle = styled.h3`
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.2em;

    padding-top: 50px;
`;

export const GridContent = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @media(max-width: 1050px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
    }

`;

export const GridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 0 20px;
    transition: transform 0.3s;

    > :first-child {
        width: 115px;
        height: 115px;

        -webkit-background-clip: padding-box;
        border: 4px solid rgb(220,220,220, .5);
        border-radius: 15px;

        background-color: unset;
        > img {
            transform: rotate(45deg);
            width: 100px;
        }
    }

    > span {
        margin: 40px;
        font-family: 'Fira Sans';
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
    }

    &:hover {
        transform: scale(1.2);
    }
    
`;
