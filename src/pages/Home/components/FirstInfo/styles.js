import styled from 'styled-components';



export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 50px 20px;

    @media(max-width: 1024px){
        flex-direction:column-reverse;
    }

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

    

    > h2 {

        max-width: 340px;

        margin-right: 65px;

        font-family: 'Oswald';
        font-weight: bold;
        font-size: 25px;

        line-height: 155.5%;

        text-align: right;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        transition: transform 0.2s;
    }

    img {
        transition: transform 0.2s;
    }

    img:hover, h2:hover {
        transform: scale(1.2);
    }

    @media(max-width: 1024px){
        flex-direction:column;
        margin-top: 20px;

        > h2 {
            margin-bottom: 10px;
        }
        > img {
            margin-bottom: 20px;
        }
    }
`;
