import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = props => {
    const { title, pages, mode } = props;
    let location = useLocation();

    return (
        <nav className={ `navbar navbar-expand-lg navbar-${ mode } bg-${ mode }` }>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">{ title }</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={ `nav-link ${ location.pathname === '/' ? 'active' : '' }` }
                                to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={ `nav-link ${ location.pathname === '/about' ? 'active' : '' }` }
                                to='/about'>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
