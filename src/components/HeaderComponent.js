import React from 'react';
import './HeaderComponent.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateWrap';
import { auth } from './FirebaseComponent';

function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleLogout = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo" alt="amazon-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleLogout} className="header_navItem">
    <span className="header_navItem1">Hello {!user? "Guest": user.email}</span>
                        <span className="header_navItem2">{user? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="header_navItem">
                    <span className="header_navItem1">Returns</span>
                    <span className="header_navItem2">&amp; Orders</span>
                </div>
                <div className="header_navItem">
                    <span className="header_navItem1">Your</span>
                    <span className="header_navItem2">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_navItem">
                        <ShoppingCartIcon className="cart" />
                        <span className="header_navItem2 header_cartCount">{cart.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Header;