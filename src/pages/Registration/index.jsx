import Rectangle from '../../core/components/Rectangle';
import TwoSquadsBackground from '../../core/components/TwoSquadsBackground';

import Footer from '../Home/components/Footer'
import MaskedInput from '../../core/components/MaskedInput';

import {IoIosArrowBack} from 'react-icons/io';
import Logo from '../../core/assets/logo1.png';

import {Redirect} from 'react-router-dom';

import {
    Container,
    RegistrationContainer,
    Content,
    LogoContent,
    Steps,
    LeftDetails,
} from './styles';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '../../core/components/Button';

function Registration(){
    const [step, setStep] = useState(1);
    const [isRegistrationDone, setIsRegistrationDone] = useState(false);

    const [userData, setUserData] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    function handleSaveUserData(){
        if(step === 1 ){
            setUserData({ 
                name,
                email,
                phone
            });
            setStep(2);
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
        if(step === 3){
            console.log(userData);
            setIsRegistrationDone(true);
        }
    },[step])

    function handleBack(){
        setStep(1);
    }

    
    // function handleSubmit(event) {
    //     event.preventDefault();
    // }

    //validação de dados
    //trabalhar responsividade
    

    return (
        <Container>
            <LeftDetails>
                {/* quadrado maior a esquerda do form */}
                <Rectangle /> 
                
                {/* quadrado menor a esquerda do form */}
                <Rectangle />

                <TwoSquadsBackground />

            </LeftDetails>


            
            <RegistrationContainer>
                <LogoContent>
                    <Rectangle >
                        <a href="/"><img src={Logo} alt="Logo da empresa"/></a>
                    </Rectangle>
                </LogoContent>


                {/* quadrado da direita do form */}
                <Rectangle />


                <Content>
                    <Steps step={step}>
                        <Rectangle>
                            <p>✓</p>
                            <TwoSquadsBackground />
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
                                <form onSubmit={() => {}}>
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
                                            <MaskedInput 
                                                placeholder="EX: (13) 9 9999-9999" 
                                                mask="(99) 9 9999-9999"
                                                value={phone} 
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </label>
                                        </>
                                    )}

                                    {
                                        step === 2 && (
                                            <>
                                            <div>
                                                <IoIosArrowBack onClick={handleBack}/>
                                                <h1>Crie sua conta</h1>
                                            </div>
                                            <label>CPF
                                                <MaskedInput 
                                                    placeholder="EX: 123-456-789-10" 
                                                    mask="999-999-999-99" 
                                                    value={cpf} 
                                                    onChange={(e) => setCpf(e.target.value)}
                                                />
                                            </label>

                                            <label>Cidade
                                                <input type="text" placeholder="EX: Santos" value={city} onChange={(e) => setCity(e.target.value)}/>
                                            </label>

                                            <label>Estado
                                                <input type="text" placeholder="EX: São Paulo" value={state} onChange={(e) => setState(e.target.value)}/>
                                            </label>
                                            </>
                                        )
                                    }

                                    {
                                        step === 1 || step === 2 ? (
                                            <button type="button" onClick={handleSaveUserData}>
                                                Continuar
                                            </button>
                                        ) : null
                                    }
                                </form>
                            </>
                        ) : (
                            <section>
                                <h1>Obrigado por se registrar!</h1>
                                <Button href="/">Voltar para home</Button>
                            </section>
                        )
                    }
                    
                    
                </Content>
            </RegistrationContainer>
            <Footer />
        </Container>
    )
}

export default Registration;