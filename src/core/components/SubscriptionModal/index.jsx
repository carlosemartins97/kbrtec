import Modal from 'react-modal';



Modal.setAppElement('#root');

export function SubscriptionModal({onRequestClose, isOpen}){
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Cadastrar</h2>
        </Modal>
    )
}

export default SubscriptionModal;