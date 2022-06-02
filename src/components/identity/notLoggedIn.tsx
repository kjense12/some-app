import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function NotLoggedIn() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <ul className="navbar-nav pt-3">
                                        <li className="nav-item">
                                            <NavLink className="nav-link text-dark" to="/identity/LogIn">Log In</NavLink>
                                        </li>
                                        <NavLink className="nav-link text-dark" to="/identity/Register">Register</NavLink>
                                    </ul>
                                </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </nav>
        </>
    );
}

export default NotLoggedIn;