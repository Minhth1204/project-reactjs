import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiServices';
import { toast } from "react-toastify";
const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async () => {
        let res = await deleteUser(dataDelete.id);

        if (res.data && res.data.EC === 0) {
            toast.success(res.data.EM);
            handleClose();
            await props.fetchListUsers();
        }
        if (res.data && res.data.EC !== 0) {
            toast.error(res.data.EM);
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                //ko click duoc ra ngoai dung backdrop="static"
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete The User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete this use . email =
                    <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmitDeleteUser() }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;