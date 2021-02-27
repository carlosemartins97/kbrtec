import styled from 'styled-components';

import headerImg from '../../../../core/assets/headerimg.png'

export const Container = styled.header`
    background: linear-gradient(
            220.36deg, rgba(25, 112, 129, 0.32) 0%, 
            rgba(247, 247, 249, 0) 65%
        );

    height: 100%;
    width: 100%;

`;

export const NavHeader = styled.div`
    z-index: 3;

    display: flex;

    position: relative;
    
    // Retângulo com a logo Principal.
    > :first-child {
        background: linear-gradient(
            ${props => props.theme.colors.gradient.secondary}, 
            ${props => props.theme.colors.gradient.primary}
        );

        position: absolute;

        width: 200px;
        height: 200px;
        left: 0px;
        top: -90px;

        border-radius: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        > a {
            transform: rotate(45deg);
            display: flex;
            flex:1;
            > img {
                position: absolute;
                
                width: 70px;

                top: 0px;
                right: 65px;
            }
        }
    }
    @media(max-width: 570px){
        justify-content:space-around;
        align-items: center;

        > :first-child {
            position: unset;


            display:flex;
            align-items: center;
            justify-content: center;

            margin: 20px 0;

            width: 100px;
            height: 100px;
            a {
                height: 100%;
                align-items: center;
                justify-content: center;
                > img {
                    position: unset;
                    width: 60px;
                    top: unset;
                    right: unset;
                }
            }
            
        }
    }
`;

export const MoreInfo = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items:center;

    margin: 30px 30px;
    
    > :first-child {
        color: ${props => props.theme.colors.secondary};
        background: linear-gradient(
            ${props => props.theme.colors.gradient.secondary}, 
            ${props => props.theme.colors.gradient.primary}
        );

        &:hover {
            transition: opacity 0.4s;
            opacity: .7;
        }
    }

    >img {
        margin-left: 70px;
    }

    @media(max-width: 570px){
        flex-direction: column;
        flex: unset;
        margin: 0;
        >:last-child {
            display: none;
        }
    }
`;

export const ContentHeader = styled.div`
    width: 100%;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;

    padding: 100px 100px;

    @media(max-width: 770px){
        flex-direction: column;
        padding: 0 50px 10px 50px;
        text-align: center;
    }
`;

export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    z-index: 1;

    >h1 {
        font-family: 'Oswald';
        font-size: 30px;
        line-height: 155.5%;
        /* or 47px */
        max-width: 550px;

        letter-spacing: 0.1em;
        text-transform: uppercase;

        > span {
            background-color: ${props => props.theme.colors.black};
            color: ${props => props.theme.colors.secondary};
            border-radius: 8px;
            padding: 5px 8px;
        }
    }

    > p {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 180%;
        margin: 25px 0;
        width: 550px;

        @media(max-width: 550px){
            width: 100%;
        }
    }
    
    //Botão
    > a {
        width: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 550px;

        background: ${props => props.theme.colors.secondary};    
    }
    @media(max-width: 550px){
        > h1 {
            font-size: 23px;
        }
        > a {
            width: 100%;
        }
    }
    @media(max-width: 1024px){
        text-align: center;
        align-items: center;
    }
`;

export const ContentImage = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 420px;

    position: relative;

    @media(max-width: 1024px){
        display: none;
    }

`;

export const Main = styled.div`

`;

export const RectangleImage = styled.div`
    transform: rotate(45deg);
    
    z-index: 1;

    position: absolute;

    left: 30%;

    width: 450px;
    height: 450px;

    border-radius: 57px;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        top: -60%;
        left: -8%;
        z-index: 1;
        background: url(${headerImg}) 0 0 repeat;
        transform: rotate(-45deg);
    }
`;

export const RectangleBackgrounds = styled.div`

    > :first-child {
        border: ${props => props.theme.colors.secondary} 1px solid;
        background: unset;

        position: absolute;
        z-index: 2;

        left: 40%;

        width: 450px;
        height: 450px;

        border-radius: 57px;
    }

    > :last-child {
        background: linear-gradient(190deg,
            ${props => props.theme.colors.gradient.primary}, 
            ${props => props.theme.colors.white}
        );
        
        position: absolute;
        z-index: 0;
        top: 0%;
        left: 20%;

        width: 450px;
        height: 450px;

        border-radius: 57px;
    }
`;

export const BackgroundDetails = styled.div`
    position: absolute;
    left: -15%;
    z-index: 0;
    > :first-child {
        position: absolute;
        top: 20%;
    }
    div {
        width: 400px;
        height: 400px;      
        background: unset;
        
        border: 2px solid rgba(25, 112, 129, 0.1);
        border-radius: 50px;
    }
    > :last-child {
        background: ${props => props.theme.colors.secondary};

        width: 100px;
        height: 100px;

        position: absolute;
        border-radius: 20px;

        top: 60%;
        right: -7%;
    }

    @media(max-width: 1280px){
        left: -30%;
    }
    @media(max-width: 900px){
        left: -50%;
    }
    @media(max-width: 600px){
        left: -75%;
    }
    @media(max-width: 450px){
        left: -105%;
    }
`;

