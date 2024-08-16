import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAtom } from 'jotai';
import { modalOpenAtom, modalContentAtom } from './Atom/atoms';

const BigModal = () => {
    const [isOpen, setIsOpen] = useAtom(modalOpenAtom);
    const [content] = useAtom(modalContentAtom);

    useEffect(() => {
        const modal = document.getElementById('my_modal_3');
        if (isOpen) {
            modal.showModal();
        } else {
            modal.close();
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <dialog id="my_modal_3" className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="w-11/12 h-5/6 bg-white p-6 rounded-lg shadow-lg overflow-auto relative">
                    <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div className="w-full h-full">{content}</div>
                </div>
            </dialog>
        </>
    );
};

export default BigModal;