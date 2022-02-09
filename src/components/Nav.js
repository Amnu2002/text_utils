import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


export default function Nav(props) {
    let navclass;
    if(props.mode1===false){
        navclass='nav-light';
    }
    else{
        navclass='nav-dark';
    }
    return (
        <>
            <nav className={navclass}>
                <li><b>{props.title}</b></li>  
                <li><Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> settings </li>
            </nav>
        </>
    )
}
Nav.propTypes = {
    title: PropTypes.string.isRequired
}
Nav.defaultProps={
    title: "DEFAULT"
}
