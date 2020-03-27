import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crwn.svg";

import { auth } from "../../firebase/firebase.utils";

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to={'/'}>
      <Logo />
    </Link>
    <div className='options'>
      <Link className='option' to={'/shop'}>Shop</Link>
      <Link className='option' to={'/shop'}>Contact</Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
          : <Link to={'/signin'}>Sign In</Link>
      }
    </div>
  </div>
)

export default Header