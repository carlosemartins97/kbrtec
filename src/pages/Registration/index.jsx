import Rectangle from '../../core/components/Rectangle';
import Button from '../../core/components/Button';

import Logo from '../../core/assets/logo1.png';

import {
    Container,
    RegistrationContainer,
    Content,
    LogoContent,
    LeftDetails,
    RightDetails,
} from './styles';

function Registration(){
    return (
        <Container>
            <LogoContent>
                <Rectangle >
                    <a href="/"><img src={Logo} alt="Logo da empresa"/></a>
                </Rectangle>
            </LogoContent>
            <RegistrationContainer>
                <Content>
                    <h1>Crie sua conta</h1>

                    <form>
                        <label>nome completo
                            <input type="text" placeholder="EX: Diego Ribeiro"/>
                        </label>

                        <label>E-mail
                            <input type="email" placeholder="EX: diegoribeiro@gmail.com"/>
                        </label>

                        <label>celular
                            <input type="text" placeholder="EX: 13999999999"/>
                        </label>
                    </form>

                    <Button>
                        Continuar
                    </Button>
                </Content>
            </RegistrationContainer>
        </Container>
    )
}

export default Registration;