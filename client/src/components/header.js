import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Noty from "./Noty";
import {AiOutlineSearch} from "react-icons/ai";
import logo from "../assests/img/logo.png"
import "../assests/styling/header.css"
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg" id='nav'>
            <Container>
                <Navbar.Brand><img  src={logo}/></Navbar.Brand>
                <Navbar.Brand href="/" style={{fontSize:"35px", fontWeight:"bolder",color:"#2c8894"}}>RBH Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{width:"100%", fontSize:"20px", marginRight:"20px"}}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Services"style={{marginLeft:"15px"}}>Services</Nav.Link>
                        <Nav.Link href="/Login"style={{marginLeft:"15px"}}>Login/SignUp</Nav.Link>
                        <Nav.Link href="/Dashboard"style={{marginLeft:"15px"}}>Dashboard</Nav.Link>
                        <Nav.Link href='#link' style={{marginLeft:"20px"}}><Noty width={"20px"} color={"#122C34"}  /></Nav.Link>
                        <Nav.Link href="#link" style={{border:"2px groove black", borderRadius:"5px", marginLeft:"50px", boxShadow: "1px 1px 1px grey"}} className="contact-van-icon">Contact Us</Nav.Link>
                        <Nav.Link href="#link" style={{border:"2px solid black", borderRadius:"5px", marginLeft:"30px", width:'55px', alignItems:"centre", boxShadow: "1px 1px 1px grey"}} className="search-nav-icon"><AiOutlineSearch size={"35px"}/></Nav.Link>


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