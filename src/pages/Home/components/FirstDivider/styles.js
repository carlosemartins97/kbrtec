import styled from 'styled-components';


export const ImageArea = styled.div`
    display: flex;
    align-items: center;
    margin-right: 130px;
    padding: 20px 0;

    > h2 {
        margin-left: 40px;

        color: ${props => props.theme.colors.white};

        font-family: 'Oswald';

        font-size: 25px;

        line-height: 155.5%;
        letter-spacing: 0.1em;

        text-transform: uppercase;
    }

    @media(max-width: 1024px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: unset;

        > img {
            width: 80px;
            height: 100px;
        }
        > h2{
            margin: unset;
        }
    }
`;

export const TextArea = styled.div`

        max-width: 600px;

    > p {
        color: ${props => props.theme.colors.white};

        font-family: Fira Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;

        line-height: 180%;
        
        > span {
            color: ${props => props.theme.colors.secondary};
        }
    }

    @media(max-width: 1024px){
        padding: 20px 0;
    }
`;

export const BackgroundDetails = styled.div`
    > :first-child {
        position: absolute;
        top: -13%;
        right: 3%;
        
        border-radius: 20px;
        @media(max-width: 1024px){
            top: -10%;
        }
        @media(max-width: 770px){
            display: none;
        }
    }
`;