import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, content }) => {
    useEffect(() => {
        const modal = document.getElementById('my_modal_2');
        if (isOpen) {
            modal.showModal();
        } else {
            modal.close();
        }
    }, [isOpen]);

    return (
        <>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    {content}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={onClose}>close</button>
                </form>
            </dialog>
        </>
    );
};

Modal.propTypes = { // Added prop validation
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.node.isRequired,
};

export default Modal;