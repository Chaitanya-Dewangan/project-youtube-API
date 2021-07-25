import "./_header.scss"
import React from 'react'
import {FaBars} from "react-icons/fa";
import {AiOutlineSearch} from 'react-icons/ai';
import {MdNotifications,MdApps} from 'react-icons/md';
import Avatar from "@material-ui/core/Avatar";
import {Link } from 'react-router-dom';

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="header border border-dark">
      <FaBars className="header__menu" size={26} 
      onClick={() => handleToggleSidebar()}/>
      <Link to='/'>
        <img
          className="header__logo"
          src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_dark.svg?cache=bb9b9c6"
          alt=""
          />
      </Link>

      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <Avatar
          src="https://source.unsplash.com/1600x900/?supercar"
          alt="YouTube"
        />
      </div>
    </div>
  );
};

export default Header
