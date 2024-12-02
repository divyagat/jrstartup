import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import "../components/header.css";

const Header = () => (
    <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid px-5 py-2 header">
            <Link className="navbar-brand" to="/">
                <img src="public/homeimg/width_200.png" alt="Logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-lg-0">
                    {['Home', 'Courses', 'Events', 'Pages', 'Shop', 'Blog', 'Elements'].map((item, index) => (
                        <li key={index} className="nav-item dropdown">
                            <Link
                                className="nav-link me-4 navc text-white"
                                to={`/${item.toLowerCase()}`}
                            >
                                {item}
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={`/${item.toLowerCase()}/subpage1`}>Subpage 1</Link></li>
                                <li><Link className="dropdown-item" to={`/${item.toLowerCase()}/subpage2`}>Subpage 2</Link></li>
                                <li><Link className="dropdown-item" to={`/${item.toLowerCase()}/subpage3`}>Subpage 3</Link></li>
                            </ul>
                        </li>
                    ))}
                </ul>
                <form className="d-flex text-white" role="search">
                    <FaSearch className="text-white" />
                </form>
            </div>
        </div>
    </nav>
);

export default Header;
