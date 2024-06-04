import ModalCreateUser from "./ModalCreateUser";
import './ManagerUser.scss'
import TableUser from "./tableUser";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";

const ManagerUser = () => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({})
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        try {
            let res = await getAllUsers();
            console.log("Response from getAllUsers:", res); // Log dữ liệu trả về từ API
            if (res.data.EC === 0) {
                setListUsers(res.data.DT);
            } else {
                console.error("Error fetching users:", res.data.EM); // Log lỗi nếu có
            }
        } catch (error) {
            console.error("Error fetching users:", error); // Log lỗi nếu có
        }
    };
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)

    }


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
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    />

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                />
            </div>
        </div >
    )
}
export default ManagerUser;