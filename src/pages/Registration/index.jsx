import Rectangle from '../../core/components/Rectangle';
import Button from '../../core/components/Button';

import Footer from '../Home/components/Footer'

import Logo from '../../core/assets/logo1.png';

import {
    Container,
    RegistrationContainer,
    Content,
    LogoContent,
    Steps,
    LeftDetails,
    RightDetails,
} from './styles';
import { useState } from 'react';
import { useEffect } from 'react';

function Registration(){
    const [step, setStep] = useState(1);

    //criar estado que guarda os dados do formulário - feito
    const [userData, setUserData] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    //setar onchange pra cada valor do formulário
    function handleSaveUserData(){
        
        if(step === 1 ){
            setUserData({ 
                name,
                email,
                phone
            });
            setStep(2);
            console.log(userData);
        } else if(step === 2){
            setUserData({ 
                ...userData, 
                cpf,
                city,
                state
            });
            setStep(3);
        }
    }

    useEffect(() => {
        console.log(userData);
    },[userData])

    
    //validação de dados
    //mask

    return (
        <Container>
            
            <RegistrationContainer>
                <LogoContent>
                    <Rectangle >
                        <a href="/"><img src={Logo} alt="Logo da empresa"/></a>
                    </Rectangle>
                </LogoContent>
                <Content>
                    <Steps>
                        <Rectangle>
                            <p>✓</p>
                        </Rectangle>

                        <Rectangle>
                            {
                                step >= 2 ? (
                                    <p>✓</p>
                                ) : (
                                    <p>.02</p>
                                )
                            }
                        </Rectangle>

                        <Rectangle>
                            {
                                step === 3 ? (
                                    <p>✓</p>
                                ) : (
                                    <p>.03</p>
                                )
                            }
                        </Rectangle>

                    </Steps>
                    {
                        step === 1 || step === 2 ? (
                            <>
                                <form>
                                    { step === 1 && (
                                        <>
                                        <h1>Crie sua conta</h1>
                                            <label>nome completo
                                                <input type="text" placeholder="EX: Diego Ribeiro" value={name} onChange={(e) => setName(e.target.value)}/>
                                            </label>

                                            <label>E-mail
                                                <input type="email" placeholder="EX: diegoribeiro@gmail.com"value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </label>

                                            <label>celular
                                                <input type="text" placeholder="EX: 13999999999" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                            </label>
                                        </>
                                    )}

                                    {
                                        step === 2 && (
                                            <>
                                            <h1>Crie sua conta</h1>
                                                <label>CPF
                                                    <input type="text" placeholder="EX: 01234567890" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                                                </label>

                                                <label>Cidade
                                                    <input type="text" placeholder="EX: Santos" value={city} onChange={(e) => setCity(e.target.value)}/>
                                                </label>

                                                <label>Estado
                                                    <input type="text" placeholder="EX: SP" value={state} onChange={(e) => setState(e.target.value)}/>
                                                </label>
                                            </>
                                        )
                                    }
                                </form>
                            </>
                        ) : (
                            <section>
                                <h1>Obrigado por se registrar!</h1>
                            </section>
                        )
                    }
                    
                    {
                        step === 1 || step === 2 ? (
                            <button type="submit" onClick={handleSaveUserData}>
                                Continuar
                            </button>
                        ) : null
                    }
                </Content>
            </RegistrationContainer>
            <Footer />
        </Container>
    )
}

export default Registration;