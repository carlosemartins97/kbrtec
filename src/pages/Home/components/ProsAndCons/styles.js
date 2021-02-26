import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

        > img {
            transform: rotate(45deg);
        }
    }
`;

export const ContentInfo = styled.div`
    text-align: center;
    width: 600px;
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
        width: 420px;
        margin-top: 30px;
        
        padding: 40px;

        text-align: center;

        border-radius: 10px;
    }
`;

export const Pros = styled.div`
    margin-right: 15px;

    > p {
        background-color: ${props => props.theme.colors.secondary};

        color: ${props => props.theme.colors.black};
    }
`;

export const Cons = styled.div`
    margin-left: 15px;

    > p {
        background-color: ${props => props.theme.colors.warning};
    }
`;




