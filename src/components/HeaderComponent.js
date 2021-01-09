import React from 'react';
import './HeaderComponent.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {

        return(
            <div className="header">
                <img 
                    className="header_logo" alt="amazon-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
                <div className="header_search">
                    <input className="header_searchInput" type="text" />
                    <SearchIcon className="header_searchIcon" />
                </div>
                <div className="header_nav">
                    <div className="header_navItem">
                        <span className="header_navItem1">Hello</span>
                        <span className="header_navItem2">Sign In</span>
                    </div>
                    <div className="header_navItem">
                        <span className="header_navItem1">Returns</span>
                        <span className="header_navItem2">&amp; Orders</span>
                    </div>
                    <div className="header_navItem">
                        <span className="header_navItem1">Your</span>
                        <span className="header_navItem2">Prime</span>
                    </div>
                    <div className="header_navItem">
                        <ShoppingCartIcon className="cart" />
                        <span className="header_navItem2 header_cartCount">0</span>
                    </div>
                </div>
                
            </div>
        );
}

export default Header;