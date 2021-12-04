import React from 'react';
import CartWidget from './CartWidget';
import '../styles/main.scss';

export const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <a className="navbar-brand" href="#">Smokin' Snowboard</a>
                <div className="navbar-nav">
                    <ul className="navbar-list">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">All Mountains</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Park</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Kids</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Custom</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Special Deals</a>
                        </li>
                    </ul>
                    <form>
                        <button className="btn btn--primary" type="submit">Log In</button>
                        <button className="btn btn--secondary" type="submit">Sign Up</button>
                    </form>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}

export default NavBar;
