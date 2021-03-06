import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};

    position: relative;

    display: flex;
    flex-direction: column;
    flex: 1;

    padding-bottom: 80px;
`;
export const FirstHalf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 120px;
    padding-bottom: 50px;
`;

export const ContentSubtitle = styled.h3`
    max-width: 400px;
    width: 400px;

    padding: 40px 0;

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

    padding: 0 10px 20px 10px;

    max-width: 400px;

    @media(max-width: 500px){
        max-width: 350px;
        width: 350px; 
    }
`;

export const ContentList = styled.ul`
    max-width: 400px;
    width: 400px;

    list-style: none;

    font-family: 'Fira Sans';
    font-size: 15px;
    line-height: 287%;

    padding-top: 40px;
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

export const SecondHalf = styled.div`
        display: flex;
        flex-direction: column;
`;

export const InfoTranslation = styled.div`  
    background: linear-gradient(270deg, #171717 0%, rgba(23, 23, 23, 0) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LastInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #000;
`;