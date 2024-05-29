// components/TableUser.js
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";

const TableUser = () => {
    const [listUsers, setListUsers] = useState([]);

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

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 ? (
                        listUsers.map((item, index) => (
                            <tr key={`table-users-${index}`}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">view</button>
                                    <button className="btn btn-warning mx-3">update</button>
                                    <button className="btn btn-danger">delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">Not found data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default TableUser;
