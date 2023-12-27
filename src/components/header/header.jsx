import React from "react";
    import './style.css'
import {NavLink} from "react-router-dom";
import {RoutersList} from "../../router";

class Header extends React.Component{

    render() {
        return  <header className={'header-block'}>
            <ul>
                <li><NavLink to={RoutersList.HOME}>Home</NavLink></li>
                <li><NavLink to={RoutersList.CONTACT_US}>Contact us</NavLink></li>
                <li><NavLink to={RoutersList.SERVICES}>Services</NavLink></li>
            </ul>
        </header>
    }
}

export default Header

