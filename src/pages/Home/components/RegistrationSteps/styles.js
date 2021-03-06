import styled from 'styled-components';

export const Container = styled.section`
    padding: 100px 50px;

    position: relative;
    z-index: 3;
`;
export const ContentTitle = styled.h2`
    font-size: 25px;
    line-height: 37px;
    text-align: center;

`;
export const ContentSteps = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;

    position: relative;
    z-index: 3;
    @media(max-width: 770px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 550px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 180px;

    margin-top: 100px;

    > :first-child {
        display: flex;
        justify-content: center;
        align-items:center;

        width: 45px;
        height: 45px;
        border-radius: 15px;

        > span {
            transform: rotate(45deg);

            font-family: 'Fira Sans';
            font-weight: bold;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.055em;
            text-transform: uppercase;
        }
    }
`;

export const Description = styled.span`
    margin-top: 40px;

    font-family: 'Fira Sans';
    font-size: 15px;
    line-height: 119%;
    text-align: center;
`;

export const Subscribe = styled.div`
    position: relative;
    z-index: 3;
    width: 260px;
    height: 170px;

    margin-top: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
        59.46deg, 
        ${props => props.theme.colors.gradient.primary} -67.96%,
        ${props => props.theme.colors.gradient.secondary} 103.75%
    );

    border-radius: 14px;

    > a {
        position: relative;
        z-index: 3;

        background: ${props => props.theme.colors.secondary};
        padding: 0px 30px;

        &:hover {
            opacity: unset;
            color: ${props => props.theme.colors.gradient.primary};
        }
    }

    >:last-child {
        left: 50%;
        top: 15%;
        z-index: 0;
        >:nth-child(n) {
            width: 100px;
            height: 100px;
            border-radius: 25px;
            border: 0.5px solid rgb(240, 240, 240, 0.5);
        }
        >:last-child {
            display: none;
        }
    }
`;

export const LeftBackgroundDetails = styled.div`
    > :first-child {
        top: -5%;
    }
`;

export const RightBackgroundDetails = styled.div`
    > :first-child {
        
        border-radius: 20px;
        position: absolute;
        right: 5%;
        bottom: -7%;
        @media(max-width: 770px){
            bottom: -5%;
        }
        @media(max-width: 450px){
            bottom: -2.5%;
        }

    }
`;
