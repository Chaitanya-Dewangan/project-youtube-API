import "./_header.scss"

import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {login} from '../../redux/actions/auth.action';
import {useHistory} from "react-router-dom"

import {FaBars} from "react-icons/fa";
import {AiOutlineSearch} from 'react-icons/ai';
import {MdNotifications,MdApps} from 'react-icons/md';
import Avatar from "@material-ui/core/Avatar";
import {Link } from 'react-router-dom';

const Header = ({ handleToggleSidebar }) => {
  const [input,setInput] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(login)
  },[dispatch])

  const {user} = useSelector(state => state.auth);
  const handleSubmit = (e) =>{
    e.preventDefault()
    history.push(`/search/${input}`)

  }

  return (
    <div className="header border border-dark">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_dark.svg?cache=bb9b9c6"
          alt=""
        />
      </Link>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <Avatar src={user?.photoURL} alt={user?.name} />
      </div>
    </div>
  );
};

export default Header
