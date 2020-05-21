import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="nav-bar brand nav-link" to="/" >Akshay</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink to="/signin" className="nav-link" >Sign in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup"className="nav-link" >Sign up</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
