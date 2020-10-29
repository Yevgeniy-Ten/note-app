import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import NavList from "../NavList/NavList";

const AppBar = () => (
    <Navbar bg="dark" variant="dark" expand="md">
        <Link className="navbar-brand" to="/notes">Notes App</Link>
        <NavList/>
    </Navbar>
)
export default AppBar