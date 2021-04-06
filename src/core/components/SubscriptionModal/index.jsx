import Modal from 'react-modal';
import TwoSquadsBackground from '../TwoSquadsBackground';

import {
    Container,
    Content,
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
                <TwoSquadsBackground />
                
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