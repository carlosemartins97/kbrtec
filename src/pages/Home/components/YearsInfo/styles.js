import styled from 'styled-components';



export const Container = styled.section`
    display: flex;

    position: relative;

    @media(max-width: 770px){
        flex-direction: column;
    }
`;
export const LeftContent = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    flex: 1;

    padding-top: 100px;
    
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
    }

    > p {
        max-width: 500px;
        margin-top: 15px;

        font-family: Fira Sans;
        font-style: normal;
        font-size: 15px;
        line-height: 180%;

        > span {
            color: ${props => props.theme.colors.secondary};
        }
    }

    @media(max-width: 770px){
        padding: 50px 20px;
        > h2 {
            margin: unset;
            margin-bottom: 50px;
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
    @media(max-width: 500px){
        flex-direction: column;
        align-items: center;

        > h2 {
            margin-bottom: 20px;
        }
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

    font-family: 'Fira Sans';
    font-weight: 500;
    font-size: 50px;

    line-height: 60px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: default;


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

        transition: transform 0.5s;

        &:hover {
        transform: scale(1.5);
    }
    }

    
`;

export const List = styled.ul`
    margin-left: 12.2px;
    margin-top: 80px;
    padding-bottom: 50px;

    @media(max-width: 500px){
        margin: unset;
        margin-left: 12.2px;

    }
`;

export const ListItem = styled.li`
    color: ${props => props.theme.colors.secondary};
    padding: 25px 0;
`;

export const ListContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    transition: transform 0.3s;
    cursor: default;

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

    &:hover {
        transform: translateX(20px);
    }

    @media(max-width: 500px){
        > span {
            display: none;
        }
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

export const BackgroundDetails = styled.div`
    position: absolute;
    left: -5%;
    top: 20%;
    z-index: 0;
    > :first-child {
        position: absolute;
        top: 20%;
    }
    div {
        width: 400px;
        height: 400px;      
        background: unset;
        
        border: 2px solid rgba(25, 112, 129, 0.2);
        border-radius: 50px;
    }

    @media(max-width: 770px){
        top: 0%;
        left: -50%;
    }
    @media(max-width: 550px){
        top: 0%;
        left: -60%;
    }
    @media(max-width: 450px){
        top: 0%;
        left: -90%;
    }
`;