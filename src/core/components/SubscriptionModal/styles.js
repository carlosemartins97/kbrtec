import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;


export const Content = styled.div`
    position: relative;
    z-index: 3;

    max-width: 430px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Oswald';
        font-size: 25px;
        line-height: 37px;
        letter-spacing: 0.1em;
    }

    form {
        font-family: 'Source Sans Pro';
        margin: 50px 0;
        display: flex;
        flex-direction: column;

        label {
            font-weight: 700;
            display: flex;
            justify-content: space-between;
            
            & + label {
                margin-top: 40px;
            }

            input {
                font-size: 16px;
                margin-left: 10px;
                background: transparent;
                width: 100%;
                max-width: 300px;
                border: 1px solid #aaa;
            }

        }

        
    }
    button {
        margin: 0 auto;

        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 60px;

        letter-spacing: 0.1em;
        text-transform: uppercase;

        background: linear-gradient(${props => props.theme.colors.gradient.secondary}, ${props => props.theme.colors.gradient.primary});
        color: #fff;
        
        border-radius: 30px;
        
        padding: 0 20px;

        transition: filter 0.2s;
        
        &:hover {
                filter: brightness(0.9); 
            }
    }

    @media(max-width: 1000px){
        padding-top: 110px;
    }

    @media(max-width: 550px){
        label {
            flex-direction:column;
        }
    }
`;

export const LeftDetails = styled.div`
    >:first-child {
        background: linear-gradient(
            ${props => props.theme.colors.gradient.secondary}, 
            ${props => props.theme.colors.gradient.primary}
        );

        position: absolute;
        z-index: 1;

        width: 400px;
        height: 400px;
        
        left: -15%;
        top: -10%;

        border-radius: 30px;

        display: flex;
        align-items: flex-end;
        justify-content: flex-end;


        > img {
            transform: rotate(45deg);
            margin-right: 80px;
            margin-bottom: 80px;
        }

        @media(max-width: 1150px) {
            width: 300px;
            height: 300px;
            top: 5%;
            left: -10%;
            > img {
                margin-right: 50px;
                margin-bottom: 50px;
            }
        }

        @media(max-width: 1000px){
            top: -25%;
            left: 0%;

            display: flex;
            justify-content: center;
            align-items: flex-end;
            > img {
                margin-left: -95px;
                margin-bottom: 20px;
                
                width: 70px;

            }
        }
    }
    >:last-child {
        position: absolute;

        bottom: 0%;
        left: -5%;

        width: 250px;
        height: 250px;

        border-radius: 30px;
    }
`;

export const RightDetails = styled.div`
    > :first-child{
        left: 80%;
        bottom: 35%;
        > :last-child {
            display: none;
        }
    }

    > :last-child {
        width: 30px;
        height: 30px;

        position: absolute;
        right: 25px;
        top: 25px;
        cursor: pointer;

        transition: opacity 0.2s;

        &:hover {
            opacity: .5;
        }
    }
`;
