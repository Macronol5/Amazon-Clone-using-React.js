import React from "react";
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div class="header">
      <img
        className="header_logo"
        src="logo.png" alt="Amazon-logo"/>

      <div className="header__search">
        <input
         className="header__searchInput" 
         type="text" />
         <SearchIcon
         className="header_searchIcon"/>
         
        {/* Logo */}
      </div>
      <div className="header_nav">
        <div className="header_option">
            <span
            className="header__optionLineOne">
            Hello Guest
            </span>

            <span className="header__optionLineTwo">
            Sign In
            </span>

        </div>

        <div className="header_option">

             <span
            className="header__optionLineOne">
            Returns
            </span>

            <span className="header__optionLineTwo">
            & Orders
            </span>

        </div>

        <div className="header_option">

            <span
            className="header__optionLineOne">
            Your
            </span>

            <span className="header__optionLineTwo">
            Prime
            </span>

        </div>
      </div>
    </div>
  );
}

export default Header;
