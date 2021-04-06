import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    > :first-child{
        left: 80%;
        bottom: 35%;
        > :last-child {
            display: none;
        }
    }
`;


export const Content = styled.div`
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
            
            & + label {
                margin-top: 40px;
            }

            input {
                font-size: 16px;
                margin-left: 10px;
                background: transparent;
                width: 100%;
                max-width: 300px;
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
        
        &:hover {
                transition: opacity 0.3s;
                opacity: .5;
            }
    }
`;