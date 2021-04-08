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

export function SubscriptionModal({onRequestClose, isOpen}){

    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

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
                    <form>
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
                    </form>
                    <button type="submit">
                        Concluir inscrição
                    </button>
                </Content>
                
            </Container>
        </Modal>
    )
}

export default SubscriptionModal;