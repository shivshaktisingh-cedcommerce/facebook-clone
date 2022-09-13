import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = (props) => {
  return (
    <>
    <div>
    <div className="topnav"> 
        <Link to="#" className='logo'>fakebook</Link>
        <Link to="/home">Home</Link>
        <Link to="/feeds">All Post</Link>
        <Link to="/myPost">My Post</Link>
        <Link to="/profile">Profile</Link>
        <a className="split" onClick={props.logout}><i class="fa fa-sign-out" aria-hidden="true"></i></a>
    </div>
    </div>
    </>
  )
}
