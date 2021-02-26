import styled from 'styled-components';

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 130px;

    flex: 1;

    > a {
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 428.2%;

        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;

        width: 60%;

        background: ${props => props.theme.colors.secondary};
    }
`;

export const TextArea = styled.div`
        flex: 1;    
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-end;

    > h2 {
        color: ${props => props.theme.colors.white};
        width: 500px;
        font-family: 'Oswald';
        font-size: 25px;
        line-height: 37px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        
        > span {
            color: ${props => props.theme.colors.secondary};
        }
    }
    > p {
        margin-top: 20px;

        color: ${props => props.theme.colors.white};

        width: 500px;

        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 136.5%;
    }
`;