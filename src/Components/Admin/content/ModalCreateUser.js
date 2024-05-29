// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { FcPlus } from "react-icons/fc";
// import { toast } from 'react-toastify'
// import { postCreateNewUser } from '../../../services/apiServices';
// const ModalCreateUser = (props) => {
//     const { show, setShow } = props
//     const handleClose = () => {
//         setShow(false)
//         setEmail("");
//         setPassWord("");
//         setRole("USER");
//         setImg("");
//         setPreviewImage("");
//     };

//     const [email, setEmail] = useState('');
//     const [username, setUserName] = useState('');
//     const [Password, setPassWord] = useState('');
//     const [role, setRole] = useState('USER');
//     const [img, setImg] = useState('');
//     const [previewImage, setPreviewImage] = useState('');

//     const hangleUpLoad = (event) => {
//         if (event.target && event.target.files && event.target.files[0]) {
//             setPreviewImage(URL.createObjectURL(event.target.files[0]));
//             setImg(event.target.files[0]);

//         } else {

//         }

//     }

//     const validateEmail = (email) => {
//         return String(email)
//             .toLowerCase()
//             .match(
//                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//             );
//     };

//     const handleSubmitCreateUser = async () => {

//         const isValidEmail = validateEmail(email);
//         if (!isValidEmail) {
//             toast.error('IsValid email')
//             return;
//         }
//         if (!Password) {
//             toast.error('IsValid Password')
//         }



//         // Tạo đối tượng FormData

//         let data = await postCreateNewUser(email, Password, username, role, img);
//         if (data && data.EC === 0) {
//             toast.success(data.EM);
//             handleClose();
//         }
//         if (data && data.EC !== 0) {
//             toast.error(data.EM)

//         }
//     }

//     return (
//         <>
//             {/* <Button variant="primary" onClick={handleShow}>
//                 Launch demo modal
//             </Button> */}

//             <Modal
//                 show={show}
//                 onHide={handleClose}
//                 size="xl"
//                 backdrop='static'
//                 className='modal-add-user'
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add new user</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form className="row g-3">
//                         <div className="col-md-6">
//                             <label className="form-label">Email</label>
//                             <input type="email" className="form-control" id="inputEmail4"
//                                 value={email}
//                                 onChange={(event) => setEmail(event.target.value)} />
//                         </div>
//                         <div className="col-md-6">
//                             <label className="form-label">Password</label>
//                             <input type="password" className="form-control"
//                                 value={Password}
//                                 onChange={(event) => setPassWord(event.target.value)} />
//                         </div>

//                         <div className="col-md-6">
//                             <label className="form-label">username</label>
//                             <input type="text" className="form-control"
//                                 value={username}
//                                 onChange={(event) => setUserName(event.target.value)} />
//                         </div>
//                         <div className="col-md-4">
//                             <label className="form-label">Role</label>
//                             <select className="form-select"
//                                 value={role}
//                                 onChange={(event) => setRole(event.target.value)}>
//                                 <option selected value='USER'>USER</option>
//                                 <option value='ADMIN'>ADMIN</option>
//                             </select>
//                         </div>
//                         <div className='col-md-12'>
//                             <label className='form-lable lable-upload' htmlFor='lableUpload'>
//                                 <FcPlus /> Uplopad flie Image :
//                             </label>
//                             <input type='file' hidden id='lableUpload'
//                                 onChange={(event) => hangleUpLoad(event)}
//                             />
//                         </div>
//                         <div className='col-md-12 img-preview' >
//                             {previewImage ?
//                                 <img src={previewImage} />
//                                 :
//                                 <span>preview Img </span>
//                             }


//                         </div>



//                     </form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
//                         Save
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }
// export default ModalCreateUser;
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";

import { toast } from "react-toastify";
import { postCreateNewUser } from "../../../services/apiServices";
const ModalCreateUser = (props) => {
    const { show, setShow } = props;
    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        } else {
            //   setPreviewImage("");
        }
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handSubmitCreateUser = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid Email");
            return;
        }
        if (!password) {
            toast.error("Invalid your PassWork");
            return;
        }

        let res = await postCreateNewUser(email, password, username, role, image);

        if (res.data && res.data.EC === 0) {
            toast.success(res.data.EM);
            handleClose();
            await props.fetchListUsers();
        }
        if (res.data && res.data.EC !== 0) {
            toast.error(res.data.EM);
        }
    };
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(event) => setRole(event.target.value)}
                            >
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>

                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor="labelUpload">
                                <FcPlus /> Upload File Image
                            </label>
                            <input
                                type="file"
                                id="labelUpload"
                                hidden
                                onChange={(event) => handleUploadImage(event)}
                            />
                        </div>

                        <div className="col-md-12 img-preview">
                            {previewImage ? (
                                <img src={previewImage} />
                            ) : (
                                <span> Preview Image </span>
                            )}
                            <span> Preview Image </span>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateUser;