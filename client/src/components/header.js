import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Noty from "./Noty";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../assests/img/logo.png"
import "../assests/styling/header.css"
import { useAuthContext } from '../hooks/useAuthContext';

function NavBar({ setnotOn }) {
    const { username, dispatch } = useAuthContext()
    const setnotOncheck = (e) => {
        if (setnotOn) {
            setnotOn({ display: "block" })
        }
    }
    return (
        <Navbar bg="light" expand="lg" id='nav'>
            <Container>
                <Navbar.Brand><img src={logo} alt={"logo"} /></Navbar.Brand>
                <Navbar.Brand href="/" style={{ fontSize: "35px", fontWeight: "bolder", color: "#2c8894" }}>RBH Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ display: "flex", alignItems: "center", width: "100%", fontSize: "20px", marginRight: "20px" }}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Services" style={{ marginLeft: "15px" }}>Services</Nav.Link>
                        <Nav.Link href="/Dashboard" style={{ marginLeft: "15px" }}>Dashboard</Nav.Link>
                        {username ? <Nav.Link onClick={() => dispatch({ type: "LOGOUT" })}>LogOut</Nav.Link> :
                            <Nav.Link href="/Login" style={{ marginLeft: "15px" }}>Login/SignUp</Nav.Link>
                        }
                        <Nav.Link href='#link' style={{ marginLeft: "20px" }} onClick={e => setnotOncheck(e)} ><Noty width={"20px"} color={"#122C34"} /></Nav.Link>
                        <Nav.Link href="/Contact-us" style={{   width: "150px", marginLeft: "50px" }} className="contact-van-icon"><div style={{height:"80%",borderRadius: "5px",pad:"auto" , border: "2px groove black", boxShadow: "1px 1px 1px grey"}}>Contact us</div></Nav.Link>

                        <Nav.Link href="#link" style={{ border: "2px solid black",display:"flex", justifyContent:"center",borderRadius: "5px", width: '35px',height:"35px", alignItems: "centre",padding:"0px", boxShadow: "1px 1px 1px grey" }} className="search-nav-icon"><AiOutlineSearch size={30} /></Nav.Link>


                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;