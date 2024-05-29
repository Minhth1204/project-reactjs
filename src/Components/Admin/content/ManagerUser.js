import ModalCreateUser from "./ModalCreateUser";
import './ManagerUser.scss'
import { useState } from "react";


const ManagerUser = () => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    return (
        <div className="manager-user-container">
            <div className="title"  >
                Manager User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}> Add new users</button>
                </div>
                <div className="table-users-container">
                    table user

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>
        </div >
    )
}
export default ManagerUser;