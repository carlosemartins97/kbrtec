import styled from 'styled-components';

export const Container = styled.section`
    background: linear-gradient(
                220.36deg, rgba(25, 112, 129, 0.32) 0%, 
                rgba(247, 247, 249, 0) 65%
            );

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RegistrationContainer = styled.div`
    background: black;

    width: 100%;
    max-width: 600px;

    margin-top: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 55px;

    color: ${props => props.theme.colors.white}; 
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;

    h1 {
        margin: 60px 0;
        text-align:center;
        text-transform: uppercase;
    }

    form {
        display: flex;
        flex-direction: column;

        text-transform: uppercase;
        font-size: 13px;

        label {
            display: flex;
            flex-direction: column;

            font-family: 'Source Sans Pro';
            font-weight: bold;
            letter-spacing: 0.1em;

            

            & + label {
                margin-top: 26px;
            }

            input {
                padding: 15px 0;
                font-family: 'Fira Sans';

                color: #fff;


                background: transparent;

                border-bottom: 1px solid ${props => props.theme.colors.secondary};
            }

        }
    }

    a {
        margin: 60px auto;

    }
`;


export const LogoContent = styled.div`
    > :first-child {
            background: linear-gradient(
                ${props => props.theme.colors.gradient.secondary}, 
                ${props => props.theme.colors.gradient.primary}
            );

            position: absolute;

            width: 300px;
            height: 300px;
            top: -25%;
            left: 38.5%;

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

                    top: 30px;
                    right: 115px;
                }
            }
    }
`;


export const LeftDetails = styled.div``;


export const RightDetails = styled.div``;

