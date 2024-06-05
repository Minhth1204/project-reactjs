import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";




const TableUserPaginate = (props) => {


    const handlePageClick = (event) => {
        props.fetchListUsersWithPaginate(+event.selected + 1)
        console.log(`User requested page number ${event.selected}`);

    };
    const { listUsers, pageCount } = props;
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
                                    <button className="btn btn-secondary"
                                        onClick={() => props.handleClickViewUser(item)}
                                    >
                                        view
                                    </button>
                                    <button className="btn btn-warning mx-3"
                                        onClick={() => props.handleClickBtnUpdate(item)}
                                    >
                                        update
                                    </button>
                                    <button className="btn btn-danger"
                                        onClick={() => props.handleClickBtnDelete(item)}
                                    >
                                        delete
                                    </button>
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
            <div className="user-pagination ">

                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    //bootrsap
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>

        </>
    );
};

export default TableUserPaginate;
