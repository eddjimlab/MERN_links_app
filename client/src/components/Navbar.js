import React, {useContext, useEffect} from "react";
import {NavLink, useHistory} from "react-router-dom"
import {AuthContext} from "../context/AuthContext";
import './navbar.css'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    useEffect(() => {
        let element = document.querySelector('.sidenav')
        window.M.Sidenav.init(element, {})
    })
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue darken-1">
                    <a href="/" data-target="slide-out" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <span className="brand-logo">Сокращение ссылок</span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/create">Создать</NavLink></li>
                        <li><NavLink to="/links">Ссылки</NavLink></li>
                        <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                    </ul>
                </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <h5>Сокращение ссылок</h5>
                    </div>
                </li>
                <li>
                    <div className="divider"/>
                </li>
                <li><NavLink to="/create">Создать</NavLink></li>
                <li><NavLink to="/links">Ссылки</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
            </ul>
        </div>

    )
}
