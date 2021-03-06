import Rectangle from '../../core/components/Rectangle';
import TwoSquadsBackground from '../../core/components/TwoSquadsBackground';

import Footer from '../Home/components/Footer'
import MaskedInput from '../../core/components/MaskedInput';

import {IoIosArrowBack} from 'react-icons/io';
import Logo from '../../core/assets/logo1.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

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
import axios from 'axios';

function Registration(){
    const [step, setStep] = useState(1);

    const [errorNameMsg, setErrorNameMsg] = useState('');
    const [errorEmailMsg, setErrorEmailMsg] = useState('');
    const [errorPhoneMsg, setErrorPhoneMsg] = useState('');

    const [errorCpfMsg, setErrorCpfMsg] = useState('');
    const [errorCityMsg, setErrorCityMsg] = useState('');
    const [errorStateMsg, setErrorStateMsg] = useState('');

    const [userData, setUserData] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [statesOptions, setStateOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);

    const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
    

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
        Aos.init({duration: 1000, once: true});

        try { 
            if(statesOptions.length === 0) {
                axios.get(BASE_URL)
                    .then(response => setStateOptions(response.data.sort(
                        function(a, b) {
                            var textA = a.nome;
                            var textB = b.nome;
                            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                        }
                    )));
            }

            axios.get(`${BASE_URL}${state}/municipios`)
                .then(response => setCityOptions(response.data));
            
        } catch {
            alert('Erro ao fazer requisição.')
        }
    },[statesOptions, state])

    useEffect(() => {
        if(step === 3){
            console.log(userData); //dados que serão salvos no banco.
        }
    },[step, userData])

    function handleBack(){
        setStep(1);
    }

    function validateFirstStepData(){
        if(name === ''){
            setErrorNameMsg('Insira seu nome');
        } else if(!/[A-Z][a-z]* [A-Z][a-z]*/.test(name)) {
            setErrorNameMsg('Digite seu nome completo.');
        }
        else {
            setErrorNameMsg('');
        }

        if (!(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email))){
            setErrorEmailMsg('Digite um email válido.');
        } else {
            setErrorEmailMsg('');
        }

        if(phone.length !== 11){
            setErrorPhoneMsg('Digite um celular válido.')  ;      
        } else {
            setErrorPhoneMsg('');
        }

        if(name !== '' && (/[A-Z][a-z]* [A-Z][a-z]*/.test(name) === true) && (/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)) === true && phone.length === 11) {
            handleSaveUserData();
        }
    }

    function validateSecondStepData(){
        if(cpf.length !== 11){
            setErrorCpfMsg('Digite um cpf válido.')
        } else {
            setErrorCpfMsg('')
        }

        if(city === '' || city === '#'){
            setErrorCityMsg('Digite uma cidade válida.')
        } else {
            setErrorCityMsg('')
        }

        if(state === '' || state === '#'){
            setErrorStateMsg('Digite um estado válido.')
        } else {
            setErrorStateMsg('')
        }

        if(cpf.length === 11 && city !== '' && city !== '#' && state !== '' && state !== '#'){
            handleSaveUserData();
        }
    }

    
    // function handleSubmit(event) {
    //     event.preventDefault();
    // }

    //validação de dados
    

    return (
        <Container>
            <LeftDetails>
                {/* quadrado maior a esquerda do form */}
                <Rectangle /> 
                
                {/* quadrado menor a esquerda do form */}
                <Rectangle />

                <TwoSquadsBackground />

            </LeftDetails>


            
            <RegistrationContainer data-aos="slide-down">
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
                    <>
                                    { step === 1 && (
                                        <form onSubmit={(e) => {e.preventDefault()}}>
                                            <h1>Crie sua conta</h1>
                                            <p>
                                                {errorNameMsg} <br/>
                                                {errorEmailMsg} <br/>
                                                {errorPhoneMsg}
                                            </p>
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

                                            <button type="button" onClick={validateFirstStepData}>
                                                Continuar
                                            </button>

                                        </form>
                                    )}

                                    {
                                        step === 2 && (
                                            <form onSubmit={(e) => {e.preventDefault()}}>
                                                <div>
                                                    <IoIosArrowBack onClick={handleBack}/>
                                                    <h1>Crie sua conta</h1>
                                                </div>
                                                <p>
                                                    {errorCpfMsg} <br/>
                                                    {errorCityMsg} <br/>
                                                    {errorStateMsg}
                                                </p>
                                                <label>CPF
                                                    <MaskedInput 
                                                        placeholder="EX: 123-456-789-10" 
                                                        mask="999-999-999-99" 
                                                        value={cpf} 
                                                        onChange={(e) => setCpf(e.target.value)}
                                                    />
                                                </label>

                                                <label>Estado
                                                    <select placeholder="EX: São Paulo" value={state} onChange={(e) => setState(e.target.value)}>
                                                        <option value="#" defaultValue>Selecione um estado</option>
                                                        {
                                                            statesOptions.map(state => {
                                                                return (
                                                                    <option key={state.sigla} value={state.sigla}>
                                                                        {state.nome}
                                                                    </option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </label>

                                                <label>Cidade 
                                                    <select placeholder="EX: Santos" value={city} onChange={(e) => setCity(e.target.value)}>
                                                        <option value="#" defaultValue>Selecione uma cidade</option>
                                                        {
                                                            cityOptions.map(city => {
                                                                return (
                                                                    <option key={city.id} value={city.nome}>
                                                                        {city.nome}
                                                                    </option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </label>

                                                <button type="button" onClick={validateSecondStepData}>
                                                    Concluir
                                                </button>

                                            </form>
                                        )
                                    }
                            </>
                        
                            {
                                step === 3 && (
                                    <section>
                                        <h1>Obrigado por se registrar!</h1>
                                        <Button href="/">Voltar para home</Button>
                                    </section>
                                )
                            }
                    
                    
                </Content>
            </RegistrationContainer>
            <Footer/>
        </Container>
    )
}

export default Registration;