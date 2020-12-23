import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const title = 'React + Redux (thunk) + Bootstrap + GitHub API';
  const links = [
    {name: 'Home', link: '/', exact: true},
    {name: 'Profile', link: '/profile', exact: false},
    {name: 'Sandbox', link: '/sandbox', exact: false},
    {name: 'About', link: '/about', exact: false},
  ];

  let htmlLinks = [];
  if (Array.isArray(links) && links.length) {
    htmlLinks = links.map((item, index) => (
      <li className="nav-item" key={index} >
        <NavLink exact={item.exact} to={item.link} className="nav-link">{item.name}</NavLink>
      </li>			
	));
  }

  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">{title}</div>
      <ul className="navbar-nav">{htmlLinks}</ul>
    </nav>
  );
};

export default Nav;
