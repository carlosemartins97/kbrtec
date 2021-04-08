import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.black};

    font-family: 'Fira Sans';

    padding-bottom: 120px;

    > :first-child {
        width: 180px;
        height: 180px;

        margin-bottom: 100px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 34px;

        transition: transform 0.5s;

        > img {
            transform: rotate(45deg);
        }

        &:hover {
            transform: rotate(315deg);
        }
    }

    @media(max-width: 770px){
        padding: 50px 20px;
    }
`;

export const ContentInfo = styled.div`
    text-align: center;
    max-width: 600px;
`;

export const ContentTitle = styled.h2`
    font-family: 'Oswald';
    font-size: 25px;
    line-height: 155.5%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;


export const ContentDescription = styled.p`
    font-size: 15px;
    line-height: 136.5%;
    text-align: center;

    margin-top: 20px;
    margin-bottom: 50px;
`;


export const ContentSubtitle = styled.h3`
    color: ${props => props.theme.colors.secondary};
    
    font-family: 'Oswald';
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
`;

export const ContentProsAndCons = styled.div`
    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        max-width: 420px;
        margin-top: 30px;
        
        padding: 40px;

        text-align: center;

        border-radius: 10px;
    }

    @media(max-width: 770px){
        flex-direction: column;
    }
`;

export const Pros = styled.div`
    margin-right: 15px;

    transition: transform 0.2s;

    > p {
        background-color: ${props => props.theme.colors.secondary};

        color: ${props => props.theme.colors.black};
    }
    @media(max-width: 770px){
        margin-right: 0;
        margin-bottom: 15px;
    }

    &:hover {
        transform: scale(1.1);
        cursor: default;
    }
`;

export const Cons = styled.div`
    margin-left: 15px;

    transition: transform 0.2s;

    > p {
        background-color: ${props => props.theme.colors.warning};
    }
    @media(max-width: 770px){
        margin-left: 0;
        margin-top: 15px;
    }

    &:hover {
        transform: scale(1.1);
        cursor: default;
    }
`;

export const BackgroundDetails = styled.div`
    > :first-child{
        top: 10%;
        > :last-child{
            display: none;
        }
        div {
            border: 2px solid rgba(25, 112, 129, 0.2);
        }
    }
`;



