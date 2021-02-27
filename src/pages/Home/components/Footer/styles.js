import styled from 'styled-components';

export const Container = styled.footer`
    font-family: 'Fira Sans';

    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 100px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1155px;

    @media(max-width: 1024px){
        flex-direction: column;
        padding: 0 20px;
    }
`;

export const Address = styled.div`
    > p, > address {
        font-family: Fira Sans;
        font-style: normal;
        font-size: 13px;
        line-height: 160%;
        text-align: center;
        letter-spacing: 0.1em;
    }

    > address {
        color: rgb(250, 250, 250, 0.3)
    }

    @media(max-width: 1024px){
        padding: 40px 0;
    }
`;

export const DesignButton = styled.a`
    > span {
        margin-right: 10px;
    }
`;