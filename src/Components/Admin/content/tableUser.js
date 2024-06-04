// components/TableUser.js


const TableUser = (props) => {

    const { listUsers } = props;



    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
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
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">view</button>
                                    <button className="btn btn-warning mx-3"
                                        onClick={() => props.handleClickBtnUpdate(item)}
                                    >
                                        update
                                    </button>
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
