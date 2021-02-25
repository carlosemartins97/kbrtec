import styled from 'styled-components';



export const Container = styled.div`
    
`;
export const Content = styled.div`

    margin-top: 65px;
    display: flex;
    justify-content: center;

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