import _, { debounce } from "lodash";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { userApi } from "../service/userApi";
import {
  getListUser,
  setCurrentUser,
  setFilter,
  setListUser,
  setShow,
  setShowEdit,
} from "../store/user/userSlice";
import FormAddNew from "./FormAddNew";
import FormEdit from "./FormEdit";
const TableUser = () => {
  const { show, listUser, pageCount, page, filter, showEdit } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  // const [show, setShow] = useState(false);
  // const [listUser, setListUser] = useState([]);
  // const [pageCount, setPageCount] = useState();
  // const [page, setPage] = useState();
  // const [filter, setFilter] = useState("");
  const handleUpdateUser = (user) => {
    dispatch(setListUser([user, ...listUser]));
  };

  const handleEditUser = (user) => {
    const newListUser = [...listUser];
    const userIndex = listUser.findIndex((item) => item.id === Number(user.id));
    console.log("userIndex: ", userIndex);
    console.log(newListUser[userIndex].last_name);
    newListUser[userIndex]["last_name"] = user.name;
    // dispatch(setListUser(newListUser));
  };

  useEffect(() => {
    dispatch(getListUser(page));
  }, [dispatch]);

  const handlePageClick = (event) => {
    dispatch(getListUser(+event.selected + 1));
  };

  const handleShowAddNew = (event) => {
    dispatch(setShow(true));
  };

  const handleDeleteUser = async (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        handleDelete(user.id);
        const result = await userApi.delete(user.id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleDelete = (id) => {
    const cloneListUser = _.cloneDeep(listUser);
    const newListUser = cloneListUser.filter((item) => item.id !== Number(id));
    dispatch(setListUser(newListUser));
  };

  const handleSortBy = (sortField, sortBy) => {
    let cloneListUser = _.cloneDeep(listUser);
    cloneListUser = _.orderBy(cloneListUser, [sortField], [sortBy]);
    dispatch(setListUser(cloneListUser));
  };

  const handleShowEdit = (user) => {
    dispatch(setShowEdit(true));
    dispatch(setCurrentUser(user));
  };

  const handleSearch = debounce((e) => {
    dispatch(setFilter(e.target.value));
  }, 300);

  useEffect(() => {
    if (filter) {
      let cloneListUser = _.cloneDeep(listUser);
      cloneListUser = cloneListUser.filter((item) => item.email.includes(filter));
      dispatch(setListUser(cloneListUser));
    } else {
      // fetchUser(1);
      dispatch(getListUser(1));
    }
  }, [filter]);

  return (
    <>
      <div className='d-flex my-3 gap-3 '>
        <input
          type='text'
          className='form-control w-25'
          placeholder='Search by email'
          onChange={handleSearch}
        />

        <div className='d-flex gap-2'>
          <Button onClick={handleShowAddNew} variant='success' className=''>
            Add new user
          </Button>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              ID{" "}
              <span className={`cusor-pointer `}>
                <i className='fa-solid fa-arrow-up ' onClick={() => handleSortBy("id", "asc")}></i>{" "}
                <i
                  className='fa-solid fa-arrow-down'
                  onClick={() => handleSortBy("id", "desc")}
                ></i>
              </span>
            </th>
            <th>Email</th>
            <th>
              First Name {"      "}
              <span className={`cusor-pointer `}>
                <i
                  className='fa-solid fa-arrow-up '
                  onClick={() => handleSortBy("first_name", "asc")}
                ></i>{" "}
                <i
                  className='fa-solid fa-arrow-down'
                  onClick={() => handleSortBy("first_name", "desc")}
                ></i>
              </span>
            </th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.length > 0 &&
            listUser &&
            listUser.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <img src={user.avatar} alt='' className='w-25 rounded-5' />
                </td>
                <td>
                  <div className='d-flex gap-3'>
                    <Button
                      variant='warning'
                      onClick={() => handleShowEdit(user)}
                      className='text-white'
                    >
                      Edit
                    </Button>
                    <Button variant='danger' onClick={() => handleDeleteUser(user)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <FormAddNew
        handleUpdateUser={handleUpdateUser}
        show={show}
        onHide={() => dispatch(setShow(false))}
      ></FormAddNew>
      <FormEdit
        handleEditUser={handleEditUser}
        show={showEdit}
        onHide={() => dispatch(setShowEdit(false))}
      ></FormEdit>
      <div className='d-flex justify-content-center mt-2'>
        <ReactPaginate
          nextLabel='next >'
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel='< previous'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default TableUser;
