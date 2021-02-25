import styled from 'styled-components';



export const Container = styled.div`
    display: flex;
`;
export const LeftContent = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    flex: 1;
    
    background: linear-gradient(60deg,
            ${props => props.theme.colors.gradient.primary} -68%, 
            ${props => props.theme.colors.gradient.secondary} 104%
        );
    color: ${props => props.theme.colors.white};

    > h2 { 
        margin-bottom: 100px;

        display: flex;

        font-family: Oswald;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 155.5%;
        /* or 39px */

        letter-spacing: 0.1em;
        text-transform: uppercase;

        margin-top: 100px;
    }

    > p {
        max-width: 500px;
        margin-top: 15px;

        font-family: Fira Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 180%;

        > span {
            color: ${props => props.theme.colors.secondary};
        }
    }

`;
export const RightContent = styled.div`
    display: flex;
    flex: 1;

    color: ${props => props.theme.colors.white};

    background: ${props => props.theme.colors.black};

`;

export const InfoContent = styled.div`
    border-left: 2px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(to bottom, #000, #A2C43A);

`;

export const InfoHeader = styled.div`
    display: flex;

    > h2 {
        margin-top: 120px;
        margin-left: 55px;

        max-width: 415px;

        font-family: Oswald;
        font-size: 25px;
        line-height: 155.5%;

        letter-spacing: 0.1em;
        text-transform: uppercase;
    }
`;

export const Dollar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    padding-bottom: 50px;

    position: relative;

    width: 130px;

    color: ${props => props.theme.colors.secondary};

    font-family: Fira Sans;
    font-weight: 500;
    font-size: 50px;

    line-height: 60px;
    letter-spacing: 0.2em;
    text-transform: uppercase;


    > span {

        right: 2%;
        bottom: 2%;
        position: absolute;

        font-family: 'Fira Sans';
        font-weight: 700;
        font-size: 100px;
        
        line-height: 120px;
        letter-spacing: 0.2em;
        text-transform: uppercase;

        color: ${props => props.theme.colors.black};
        
        background: -webkit-linear-gradient(left,
        ${props => props.theme.colors.black}, ${props => props.theme.colors.secondary});
        -webkit-background-clip: text;
        -webkit-text-stroke: 4px transparent;
        -webkit-text-stroke-width: 2px;

        opacity: 0.4;
    }
`;

export const List = styled.ul`
    margin-left: 12.2px;
    margin-top: 80px;
    padding-bottom: 50px;
`;

export const ListItem = styled.li`
    color: ${props => props.theme.colors.secondary};

    padding: 25px 0;
`;

export const ListContent = styled.div`
    display: flex;
    align-items: center;

    > span {
        font-size: 25px;
        margin: 0 50px;
        background: -webkit-linear-gradient(left, #C2FF01, #000);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    > p {
        font-family: 'Oswald';
        font-weight: bold;
        font-size: 25px;

        line-height: 37px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }
`;

export const InfoListItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 65px;

    > small {
        color: ${props => props.theme.colors.white};
        font-family: Fira Sans;
        font-size: 15px;
        line-height: 180%;
    }

    > span {
        font-family: 'Oswald';
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.005em;
        text-transform: uppercase;
    }
`;