import React from 'react';
//import { NavLink } from 'react-router-dom';
import {
    Link,
    useRouteMatch
  } from "react-router-dom";
import { connect } from 'react-redux';
import { signOutAction } from '../../store/Actions/AuthAction'

  

  const Navbar = (props) => {

    const handleClick = () => {
        props.signout()
    }

        let { url } = useRouteMatch()
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
                                <button className="nav-link text-white bg-dark border-0" onClick ={handleClick} >Sign out</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );  
    }



const mapDispatchToProps = (dispatch) => {
    return{
        signout: () => dispatch(signOutAction())
    }
}

export default connect(null,mapDispatchToProps)(Navbar)

