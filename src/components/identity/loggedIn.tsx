import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { AppContext, initialState } from '../../state/AppContext';
import { getValue } from '@testing-library/user-event/dist/utils';
import { data } from 'jquery';

function LoggedIn() {

    let appState = useContext(AppContext);
    const navigate = useNavigate();

    const logOut = () => {
        appState.setValues("", "", "", "")
        let path = `/`;
        navigate(path);
    }

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
                                            <div className="dropdown">
                                            </div>
                                        </li>
                                        <NavLink onClick={logOut} className="nav-link text-dark" to="/">Log out</NavLink>
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

export default LoggedIn;