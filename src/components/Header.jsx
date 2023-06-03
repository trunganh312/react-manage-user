import { useState } from "react";
import { Dropdown, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../store/auth-thunk/auth-slice";

function Header(props) {
  const { success } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Đăng xuất thành công");
    navigate("/");
  };
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>TrungAnh</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto d-flex gap-2'>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/admin'>Manage</Link>
          </Nav>
          <NavDropdown title='Setting' id='basic-nav-dropdown' className=''>
            {success ? (
              <span className='cusor-pointer' onClick={handleLogOut}>
                Logout
              </span>
            ) : (
              <span>
                <Link to='/sign-in'>Login</Link>
              </span>
            )}

            <Link to='/sign-up'>Sign up</Link>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
