import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/orders">Order</Link>
                <Link to="/">Shop</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

    {               
        user?.uid ?
        <button onClick={logOut} className='btn-logOut'>Sign Out</button>
        :
        <>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        </>
        }
            </div>
            <p>{user?.email} {user?.photoURL}</p>
            

        </nav>
    );
};

export default Header;