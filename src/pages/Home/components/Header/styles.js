import styled from 'styled-components';

import headerImg from '../../../../core/assets/headerimg.png'

export const Container = styled.div`
    background: linear-gradient(
            220.36deg, rgba(25, 112, 129, 0.32) 0%, 
            rgba(247, 247, 249, 0) 64.63%
        );

    height: 100vh;
    width: 100%;

    overflow: hidden;

`;

export const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;

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
            flex: 1;

            > img {
                position: absolute;
                
                width: 70px;

                top: 0px;
                right: 65px;
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

        &:hover {
            transition: opacity 0.4s;
            opacity: .7;
        }
    }

    >img {
        margin-left: 70px;
    }
`;

export const ContentHeader = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;




`;

export const ContentText = styled.div`
    width: 50%;
    margin: 0 200px;


    >h1 {
        font-family: 'Oswald';
        font-size: 30px;
        line-height: 155.5%;
        /* or 47px */

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
    }
    
    //Botão
    > a {
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;

        background: ${props => props.theme.colors.secondary};

        height: 60px;
        
        &:hover {
            transition: opacity 0.3s;
            opacity: .5;
        }
        
    }
`;

export const ContentImage = styled.div`
    height: 100%;
    width: 100%;

    margin-top: 100px;
    margin-left: 100px;

    position: relative;

    > :first-child {
        border: ${props => props.theme.colors.secondary} 1px solid;
        background: unset;

        position: absolute;
        z-index: 2;
        top: 0%;
        left: 8%;

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
        left: -8%;

        width: 450px;
        height: 450px;

        border-radius: 57px;
    }
`;

export const RectangleImage = styled.div`
    transform: rotate(45deg);
    
    z-index: 1;
    

    position: relative;

    width: 450px;
    height: 450px;

    border-radius: 57px;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 1000px;
        height: 1000px;
        top: -60%;
        left: -8%;
        z-index: 1;
        background: url(${headerImg}) 0 0 repeat;
        transform: rotate(-45deg);
    }
`;

