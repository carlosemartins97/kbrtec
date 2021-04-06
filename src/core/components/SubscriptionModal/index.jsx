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

Modal.setAppElement('#root');

export function SubscriptionModal({onRequestClose, isOpen}){
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
                            <input type="text"/>
                        </label>
                        <label> TELEFONE:  
                            <input type="text"/>
                        </label>
                        <label> CPF: 
                            <input type="text"/>
                        </label>
                    </form>
                    <button>
                        Concluir inscrição
                    </button>
                </Content>
                
            </Container>
        </Modal>
    )
}

export default SubscriptionModal;