import styled from 'styled-components';

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 130px;

    flex: 1;

    > a {
        font-family: 'Source Sans Pro';
        font-weight: bold;
        font-size: 15px;
        line-height: 428.2%;

        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;

        background: ${props => props.theme.colors.secondary};
        @media(max-width: 400px){
            font-size: 13px;
        }
    }

    @media(max-width: 1024px){
       width: 100%;
       height: 100%;
       margin: unset; 
    }
`;

export const TextArea = styled.div`
        padding: 20px 0;

        flex: 1;    
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-end;

    > h2 {
        color: ${props => props.theme.colors.white};
        max-width: 500px;
        font-size: 25px;
        line-height: 37px;
        > span {
            color: ${props => props.theme.colors.secondary};
        }
    }
    > p {
        margin-top: 20px;
        color: ${props => props.theme.colors.white};
        max-width: 500px;
        line-height: 136.5%;
        
        @media(max-width: 1024px){
            padding: 30px 0;
        }
    }

    @media(max-width: 770px){
        flex: unset;
        width: 100%;
        align-items: center;
    }
`;