import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Noty from "./Noty";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assests/img/logo.png"
import "../../assests/styling/header.css"
import { useAuthContext } from '../../hooks/useAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useLoader } from '../../hooks/useLoader';

function NavBar({ setnotOn }) {
    const { username, dispatch } = useAuthContext();
    const { setLoader } = useLoader()
    const setnotOncheck = (e) => {
        if (setnotOn) {
            setnotOn({ display: "block" })
        }
    }
    const navigate = useNavigate()
    const handleLogOut = () => {
        setLoader(true)
        setTimeout(() => {
            dispatch({ type: "LOGOUT" });
            navigate('/');
            window.location.reload()
            setLoader(false);
        }, 1000);
    }
    return (
        <Navbar bg="light" expand="lg" id='nav'>
            <Container style={{ width: '90%' }}>
                <Navbar.Brand><img src={logo} alt={"logo"} /></Navbar.Brand>
                <Navbar.Brand href="/" style={{ fontSize: "35px", fontWeight: "bolder", color: "#2c8894" }}>RBH Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end " style={{ display: "flex", justifyContent: 'flex-end', alignItems: "center", width: "100%", fontSize: "20px", marginRight: "20px" }}>
                        <div
                            className="max-[992px]: flex-col
                            md:flex-row                  
                            gap-3
                            mx-5"
                            style={{ width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}
                        >
                            <Link to="/" className='link'>Home</Link>
                            <Link to="/Services" className='link'>Services</Link>
                            {!username && <Link to="/Dashboard" className='link'>Dashboard</Link>}
                            {username ? <Link className='link' onClick={handleLogOut}>LogOut</Link> :
                                <Link to="/Login" className='link'>Login/SignUp</Link>
                            }
                            <Link to='#link' className='link' style={{ marginLeft: "20px" }} onClick={e => setnotOncheck(e)} ><Noty width={"20px"} color={"#122C34"} /></Link>
                            <Link to="/Contact-us" style={{ width: "150px", marginLeft: "50px" }} className="contact-van-icon link">
                                <div style={{ height: "80%", borderRadius: "5px", textAlign: 'center', border: "2px groove black", boxShadow: "1px 1px 1px grey" }}>Contact us</div>
                            </Link>

                            <Link href="#link" style={{ border: "2px solid black", display: "flex", justifyContent: "center", borderRadius: "5px", width: '35px', height: "35px", alignItems: "centre", padding: "0px", boxShadow: "1px 1px 1px grey" }} className="search-nav-icon link"><AiOutlineSearch size={30} /></Link>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;