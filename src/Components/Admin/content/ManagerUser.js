import ModalCreateUser from "./ModalCreateUser";
import './ManagerUser.scss'

const ManagerUser = () => {
    return (
        <div classNameName="manga-user-container">
            <div classNameName="title">
                Manager User
            </div>
            <div classNameName="users-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    table user

                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManagerUser;