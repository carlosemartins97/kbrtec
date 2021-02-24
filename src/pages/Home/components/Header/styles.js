import styled from 'styled-components';

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

    }

    >img {
        margin-left: 70px;
    }
`;


