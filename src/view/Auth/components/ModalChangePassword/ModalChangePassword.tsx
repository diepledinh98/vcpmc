import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
interface OpenProps {
    handleOpen: () => void,
    isOpen: boolean
}
const ModalChangePassword = ({ isOpen, handleOpen }: OpenProps) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');




    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    return (
        <div className="modal__change__password">
            <Modal
                title="Title"
                open={isOpen}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </div>
    )
}

export default ModalChangePassword