import styled from 'styled-components';



export const Container = styled.div`
margin-top: 100px;
margin-bottom: 100px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 65px;
    margin-bottom: 50px;
`;

export const ContentTitle = styled.div`
    display: flex;
    justify-content:flex-end;
    align-items: center;
    flex: 1;

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

        font-family: 'Oswald';
        font-weight: bold;
        font-size: 25px;
        line-height: 37px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }
`;

export const ContentDescription = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex: 1;

    > p {
            width: 500px;
            font-family: Fira Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 180%;
        }
`;

export const Grid = styled.div`

`;

export const GridTitle = styled.h3`
    font-family: 'Oswald';
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
`;

export const GridContent = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content:center;

`;

export const GridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 0 20px;


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
        }
`;