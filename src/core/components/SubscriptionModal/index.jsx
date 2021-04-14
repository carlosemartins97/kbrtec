import Modal from 'react-modal';

import Logo from '../../assets/logo1.png'
import {IoCloseOutline} from 'react-icons/io5';

import TwoSquadsBackground from '../TwoSquadsBackground';
import Rectangle from '../Rectangle';

import {
    Container,
    Content,
    RightDetails,
    LeftDetails
} from './styles';
import MaskedInput from '../MaskedInput';
import { useState } from 'react';

Modal.setAppElement('#root');

function SubscriptionModal({onRequestClose, isOpen}){

    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const [errorCpfMessage, setErrorCpfMessage] = useState('');
    const [errorPhoneMessage, setErrorPhoneMessage] = useState('');
    const [errorNameMessage, setErrorNameMessage] = useState('');

    const [isValid, setIsValid] = useState(false);

    function handleValidateData() {
        if(name === ''){
            setErrorNameMessage('Insira seu nome');
        } else {
            setErrorNameMessage('');
        }
        
        if(phone.length !== 11){
            setErrorPhoneMessage('Digite um número de celular válido.')
        } else {
            setErrorPhoneMessage('');
        }

        if(cpf.length !== 11) {
            setErrorCpfMessage('Digite um cpf válido');
        } else {
            setErrorCpfMessage('');
        }

        if(name !== '' && phone.length === 11 && cpf.length === 11) {
            setIsValid(true);
        }
    }

    function handleSubmitModal(){
        handleValidateData();
        if(isValid){
            setTimeout(() => onRequestClose(), 1000);
        }
        
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <RightDetails>
                    <TwoSquadsBackground />
                    <IoCloseOutline onClick={onRequestClose} alt="Fechar modal"/>
                </RightDetails>

                <LeftDetails>
                    <Rectangle >
                        <img src={Logo} alt="Logo da empresa"/>
                    </Rectangle>
                    
                    <Rectangle />
                </LeftDetails>
                
                <Content>
                    <h1>NÃO SAIA AINDA! PREPARAMOS UM
                    PRESENTE ESPECIAL PARA VOCÊ</h1>
                    <form onSubmit={(event) => event.preventDefault()}>
                        <label> SEU NOME: 
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        </label>
                        <label> TELEFONE:  
                            <MaskedInput 
                                mask="(99) 9 9999-9999"
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                        <label> CPF: 
                            <MaskedInput 
                                mask="999-999-999-99" 
                                value={cpf} 
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </label>
                        <p>
                            {errorNameMessage} <br/>
                            {errorPhoneMessage} <br/>
                            {errorCpfMessage}
                        </p>
                        <button type="submit" onClick={handleSubmitModal}>
                            Concluir inscrição
                        </button>
                    </form>
                </Content>
                
            </Container>
        </Modal>
    )
}

export default SubscriptionModal;