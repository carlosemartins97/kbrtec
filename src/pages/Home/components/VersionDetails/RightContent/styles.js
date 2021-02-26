import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(59.46deg, #1D737E -67.96%, #4FB9C7 103.75%);
    color: ${props => props.theme.colors.white};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    padding-top: 120px;
    padding-bottom: 80px;
`;


export const ContentSubtitle = styled.h3`
    width: 400px;

    padding: 20px 0;

    font-family: 'Oswald';
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: ${props => props.theme.colors.secondary};
`;

export const ContentInfo = styled.p`
    font-family: 'Fira Sans';
    font-size: 15px;
    line-height: 136.5%;

    padding-bottom: 20px;

    width: 400px;
`;

export const ContentList = styled.ul`
    width: 400px;

    list-style: none;

    font-family: 'Fira Sans';
    font-size: 15px;
    line-height: 287%;

    padding-bottom: 20px;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;

    > :first-child {
        border-radius: 50%;
        z-index: 0;
        transform: rotate(0deg);

        display: flex;
        align-items: center;
        justify-content: center;

        width: 20px;
        height: 20px;

        margin-right: 10px;
        > img {
            width: 70%;
            border-radius: 50%;
            border: 1px solid green;
            padding: 1px;
        }
    }
`;