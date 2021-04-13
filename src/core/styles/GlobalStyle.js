import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
        height: 100%;
        scroll-behavior: smooth;
    }

    *, button, input {
        border:0;
        outline:0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Oswald';
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    p {
        font-family: 'Fira Sans';
        font-size: 15px;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.black};
        cursor: pointer;
        &:visited {
            color: unset;
        }
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.8);

        position: fixed;
        z-index: 5;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 1080px;
        height: 100%;
        max-height: 500px;
        background: linear-gradient(90deg, #fff 80%, #e4e4e4);
        padding: 48px;
        margin: 0 16px;
        position: relative;
        border-radius: 8px;

        overflow: hidden;

        @media(max-width: 1000px){
            max-height: 770px;
        }
    }
`;