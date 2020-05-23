import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

  const Navbar = (props) => {

        let { path, url } = useRouteMatch()
        return (
            <div className="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                    <Link className="nav-bar brand nav-link text-white" to="/" >Akshay</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li>
                                <Link to={`${url}${props.signin}`} className="nav-link text-white">Sign in</Link>
                            </li>
                            <li>
                                <Link to={`${url}${props.signup}`} className="nav-link text-white">Sign up</Link>
                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }


export default Navbar;
