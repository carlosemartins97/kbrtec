import styled from 'styled-components';

export const Container = styled.div`
    > :first-child {
        border-radius: 50%;

        width: 30px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;
        > img {
            transform: rotate(45deg);

            border-radius: 50%;
            border: 1px solid #00AA54;
            box-sizing: border-box;
            box-shadow: 0px 2px 5px rgba(0, 170, 84, 0.75);

            padding: 5px;
        }
    }

`;