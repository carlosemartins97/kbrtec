import styled from 'styled-components';


export const ImageArea = styled.div`
    display: flex;
    align-items: center;
    margin-right: 130px;

    > h2 {
        margin-left: 40px;

        color: ${props => props.theme.colors.white};

        font-family: 'Oswald';

        font-size: 25px;

        line-height: 155.5%;
        letter-spacing: 0.1em;

        text-transform: uppercase;
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
`;