import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEdit, FaBook} from "react-icons/fa";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="nav-header">
                    <ul>
                        <li>
                            <Link to="/">
                            <FaHome className="nav-icon-home" />HOME</Link>
                        </li>
                        <li>
                            <Link to="/projects">
                            <FaEdit className="nav-icon-projects" />PROJECTS</Link>
                        </li>
                        <li>
                            <Link to="/contacts">
                            <FaBook className="nav-icon-contacts" />CONTACTS</Link>
                        </li>
                    </ul>
                 </div>
            </nav>
        );
    };
};
