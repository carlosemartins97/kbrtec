import styled from 'styled-components';



export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 100px 0;

`;

export const LeftContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    > p {
        max-width: 700px;

        font-family: Fira Sans;
        font-size: 15px;

        line-height: 180%;
    }
`;

export const RightContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    > p {

        max-width: 340px;

        margin-right: 65px;

        font-family: 'Oswald';
        font-weight: bold;
        font-size: 25px;

        line-height: 155.5%;

        text-align: right;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }
`;
