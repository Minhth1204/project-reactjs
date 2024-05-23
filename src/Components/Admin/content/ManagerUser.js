import ModalCreateUser from "./ModalCreateUser";


const ManagerUser = () => {
    return (
        <div classNameName="manga-user-container">
            <div classNameName="title">
                Manager User
            </div>
            <div classNameName="content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    table user
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManagerUser;