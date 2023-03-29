import React from "react";
import "../components/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "react-router-dom";
function Navbar(props) {
  
  const handleClick = ()=>{
    props.setShowLogin(true);
  }

  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link to='/'>
          <div className="navbar_logo">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt=""
            />
          </div>
        </Link>
        <div className="navbar_search">
          <input
            type="search"
            placeholder="Search for products, brands and more"
          />
          <SearchIcon className="search_icon" />
        </div>
      </div>
      <div className="navbar_right">
        <div className="navbar_login">
          <button className="login_btn navbar_options" onClick={handleClick}>{props.isLoggedIn?"Binay":"Login"}</button>
        </div>
        <div className="navbar_options">
          <p>
            <strong>Become a seller</strong>
          </p>
        </div>
        <div className="navbar_options dropdown">
          <p className="dropbtn">
            <strong>More</strong>
            <strong className = "arrow_head">^</strong>
          </p>
          <div class="dropdown-content">
            <div className="links">
                <NotificationsIcon className="Icon"/>
                <a href="$">Notification preferences</a>
            </div>
            <div className="links">
                <LiveHelpIcon className="Icon"/>
                <a href="$" className="links">24X7 Customer care</a>
            </div>
            <div className="links">
                <TrendingUpIcon className="Icon"/>
                <a href="$" className="links">Advertize</a>
            </div>
            <div className="links">
                <DownloadIcon className="Icon"/>
                <a href="$" className="links">Download app</a>
            </div>
          </div>
        </div>
        <div className="navbar_options">
          <ShoppingCartIcon />
          <p>
            <strong>Cart</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
