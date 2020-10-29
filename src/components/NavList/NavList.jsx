import React from "react";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom"

const NavList = () => (
    <Nav className="mx-auto">
        <NavLink exact to="/notes" className="nav-link">Notes</NavLink>
        <NavLink to="/notes/add" className="nav-link">Add note</NavLink>
    </Nav>
)
export default NavList