import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.scss';

export const Nav = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            React + Bootstrap + GitHub API
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
        </ul>
    </nav>
)
