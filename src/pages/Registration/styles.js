import styled from 'styled-components';

export const Container = styled.section`
    background: linear-gradient(
                220.36deg, rgba(25, 112, 129, 0.32) 0%, 
                rgba(247, 247, 249, 0) 65%
            );

    width: 100%;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >:last-child {
        width: 100%;
        padding: unset;
        height: 98px;
        

        > :first-child{
            height: 50px;
            justify-content: center;
            > :nth-child(1), >:nth-child(2)  {
                display: none;
            }
        }
    }
`;

export const RegistrationContainer = styled.div`
    position: relative;
    z-index: 2;

    padding: 0 1rem;

    background: black;

    width: 100%;
    max-width: 600px;

    margin: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 55px;

    color: ${props => props.theme.colors.white}; 

    > :nth-child(2) {

        position: absolute;
        bottom: 60px;
        right: -8%;

        border-radius: 15px;

    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;

    min-height: 811px;

    display: flex;
    flex-direction: column;

    

    h1 {
        margin: 60px 0;
        text-align:center;
        text-transform: uppercase;

        font-family: 'Oswald';
        font-weight: 200;
        font-size: 25px;
        line-height: 37px;
        letter-spacing: 0.1em;
        text-transform: uppercase;

    }

    form, > section {
        display: flex;
        flex-direction: column;

        text-transform: uppercase;
        font-size: 13px;

        > div {
            display: flex;
            align-items: center;

            >:first-child {
                width: 16px;
                height: 16px;
                cursor: pointer;

                transition: filter 0.2s;
                
                &:hover {
                    filter: brightness(0.5);
                }
            }

            h1 {
                flex:1;
            }

        }

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

    button {
        margin: 60px auto;

        font-family: 'Source Sans Pro';
        font-weight: bold;
        line-height: 60px;

        letter-spacing: 0.1em;
        text-transform: uppercase;

        background: ${props => props.theme.colors.secondary};
        
        border-radius: 30px;
        
        padding: 0 20px;
        
        &:hover {
            transition: opacity 0.3s;
            opacity: .5;
        }

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
        left: 25%;
        top: -28%;

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

                top: 40px;
                right: 115px;
            }
        }
    }
`;


export const Steps = styled.div`
    display: flex;
    justify-content: space-between;

    > :nth-child(n) {
        position: relative;

        width: 40px;
        height: 40px;

        border-radius: 15px;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 200px;

        p {
            color: ${props => props.theme.colors.black};
            transform: rotate(45deg);

            font-family: 'Source Sans Pro';
            font-weight: bold;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }
    }

    > :nth-child(1) {
        position: relative;
        >:last-child {
            transform: rotate(-45deg);
            top: -100%;
            left: -100%;
            > :last-child {
                display: none;
            }
            > :nth-child(n) {
                width: 100px;
                height: 100px;
                border-radius: 15px;
            }
        }
    }

    > :nth-child(2) {
        position: relative;
        background: ${props => props.step === 1 ? props.theme.colors.black : props.theme.colors.secondary};
        border: 1px solid ${props => props.theme.colors.secondary};
        p {
            color: ${props => props.step === 1 ? props.theme.colors.white : props.theme.colors.black};
        }
        &::after {
            content: '';
            transform: rotate(45deg);

            width: 200%;
            height: 4px;
            background: linear-gradient(to right, #ddd, #bbb);

            position: absolute;
            right: -80px;
            bottom: -48px;

        }
        &::before {
            content: '';
            transform: rotate(45deg);

            width: 200%;
            height: 4px;
            background: linear-gradient(to right, #ddd, #bbb);

            position: absolute;
            left: -80px;
            top: -40px;

        }

    }   

    > :nth-child(3) {
        background: ${props => props.step === 2 || props.step === 1 ? props.theme.colors.black : props.theme.colors.secondary};
        border: 1px solid ${props => props.theme.colors.secondary};
        p {
            color: ${props => props.step === 2 || props.step === 1 ? props.theme.colors.white : props.theme.colors.black};
        }
    }    
`;


export const LeftDetails = styled.div`
    >:first-child{
        position: absolute;

        width: 200px;
        height: 200px;

        top: 50%;
        left: 20%;

        border-radius: 15px;
    }

    > :nth-child(2) {
        position: absolute;

        top: 30%;
        left: 15%;

        border-radius: 15px;
    }

    > :last-child {
        bottom: 20%;
        > :last-child {
            display: none;
        }
    }
`;

