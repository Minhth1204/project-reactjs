import ModalCreateUser from "./ModalCreateUser";
import './ManagerUser.scss'
import TableUser from "./tableUser";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDelateUser";
import TableUserPaginate from "./TableUserPaginate";
import { getUserWithPaginate } from "../../../services/apiServices";


const ManagerUser = () => {

    const [pageCount, setPageCount] = useState(0);
    const LIMIT = 7;
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [listUsers, setListUsers] = useState([]);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
    const [dataDelete, setDataDelete] = useState({})
    const [dataUpdate, setDataUpdate] = useState({})
    useEffect(() => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1);
    }, []);

    const fetchListUsers = async () => {
        try {
            let res = await getAllUsers();

            if (res.data.EC === 0) {

                setListUsers(res.data.DT);
            } else {
                console.error("Error fetching users:", res.data.EM); // Log lỗi nếu có
            }
        } catch (error) {
            console.error("Error fetching users:", error); // Log lỗi nếu có
        }
    };

    const fetchListUsersWithPaginate = async (page) => {
        try {
            let res = await getUserWithPaginate(page, LIMIT);

            if (res.data.EC === 0) {
                console.log('check fet', res.data.DT.users)
                setListUsers(res.data.DT.users);
                setPageCount(res.data.DT.totalPages)
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
    const resetUpdateData = () => {
        setDataUpdate({})

    }
    const handleClickViewUser = (user) => {
        setShowModalViewUser(true)
        setDataUpdate(user)
    }
    const handleClickBtnDelete = (user) => {
        console.log(user)
        setShowModalDeleteUser(true)
        setDataDelete(user)
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
                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickViewUser={handleClickViewUser}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickViewUser={handleClickViewUser}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
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
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    resetUpdateData={resetUpdateData}
                    fetchListUsers={fetchListUsers}
                    dataUpdate={dataUpdate}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div >
    )
}
export default ManagerUser;