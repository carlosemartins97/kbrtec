import styled from 'styled-components';

export const Container = styled.section`
    background: linear-gradient(180deg, rgba(23, 23, 23, 1) 0%, #000 100%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContentTitle = styled.h2`
    width: 670px;

    margin: 100px 0;

    font-family: 'Oswald';
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: ${props => props.theme.colors.white};
`;

export const IframeTag = styled.iframe`
    width: 1150px;
    height: 650px;

    margin-bottom: 100px;
`;