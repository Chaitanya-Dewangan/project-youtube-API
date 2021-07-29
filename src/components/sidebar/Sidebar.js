import './_sidebar.scss';
import React from 'react';
import {useDispatch} from 'react-redux';
import { log_out } from  "../../redux/actions/auth.action";
import {
    MdHome,
    MdSubscriptions,
    MdThumbUp,
    MdHistory,
    MdExitToApp,
    MdSentimentDissatisfied,
    MdLibraryBooks,

} from "react-icons/md"
import {Link} from "react-router-dom";


const Sidebar = ({sidebar,handleToggleSidebar}) => {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(log_out());
    }

    return (
      <nav
        className={`sidebar ${sidebar && "open"}`}
        onClick={() => handleToggleSidebar(false)}
      >
        <Link to="/">
          <li>
            <MdHome size={23} />
            <span>Home</span>
          </li>
        </Link>
        <Link to="/feed/subscriptions">
          <li>
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
          </li>
        </Link>
        
          <li>
            <MdThumbUp size={23} />
            <span>Liked Video</span>
          </li>
        
        
          <li>
            <MdHistory size={23} />
            <span>History</span>
          </li>
        

        <hr />

        <li>
          <MdLibraryBooks size={23} />
          <span>Playlists</span>
        </li>
        <li>
          <MdSentimentDissatisfied size={23} />
          <span>Feedback</span>
        </li>
        <hr />
        <li onClick={logOutHandler}>
          <MdExitToApp size={23} />
          <span>Exit</span>
        </li>
      </nav>
    );
}

export default Sidebar
