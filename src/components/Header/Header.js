import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid
                        ?
                        <button className="btn-logOut" onClick={handleSignOut}>Log Out</button>
                        :
                        <>
                            <Link to="/signUp">Sign Up</Link>
                            <Link to="/login">Login</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;