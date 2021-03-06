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

    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.2em;

    color: ${props => props.theme.colors.secondary};
    @media(max-width: 500px){
            max-width: 350px;
            width: 350px; 
    }
`;

export const ContentInfo = styled.p`
    line-height: 136.5%;

    padding-bottom: 20px;

    width: 400px;
    @media(max-width: 500px){
        max-width: 350px;
        width: 350px; 
    }
`;

export const ContentList = styled.ul`
    width: 400px;

    list-style: none;

    font-family: 'Fira Sans';
    font-size: 15px;
    line-height: 287%;

    padding-bottom: 20px;

    @media(max-width: 500px){
        max-width: 350px;
        width: 350px; 
    }
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;

    > :first-child {
        margin-right: 10px;
    }
`;