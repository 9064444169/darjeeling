import React from 'react';
import "./navbar.scss";
import logo from '../../p.png';

export default function navbar() {
    return  <nav className="navbar">
<img src={logo} alt='tours logo'/>
<ul className="nav-links">
    <li>
    <a href="/" className="nav-link">
        home
    </a>
    </li>
    <li>
    <a href="/" className="nav-link">
        about
    </a>
    </li>
    <li>
    <a href="/" className="nav-link active">
        tours
    </a>
    </li>
</ul>
    </nav>
}