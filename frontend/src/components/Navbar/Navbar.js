import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import './MenuBurger.css'

const Navbar = () => {
  const [isActive, setActive] = React.useState([false, ['navbar__mobile_icon', ]]);
  let isActive_ = isActive[0];
  let classes = isActive[1];

  const toggleClass = () => {
    if (!isActive_) {
      classes.push('open');
      document.body.style.overflow = 'hidden';
    } else {
      classes.splice(-1);
      document.body.style.overflow = 'unset';
    }
    setActive([!isActive_, classes]);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
        <div className="navbar__logo_iconPlace">
          <div className="navbar__logo_iconPlace_icon"></div>
        </div>
        <div className="navbar__logo_name">
          <h2>Maxim Sheleh</h2>
        </div>
        <div className="navbar__logo_status">
          developer
        </div>
        </Link>
      </div>

      <div className={isActive_ ? 'navbar__links_mobile': 'navbar__links'}>
        <div className="navbar__links_link" onClick={toggleClass}><Link to="/Projects">Projects</Link></div>
        <div className="navbar__links_link" onClick={toggleClass}><Link className="border_link" to="/">Technology</Link></div>
        <div className="navbar__links_link" onClick={toggleClass}><Link to="/About">Contact</Link></div>
      </div>
      <div className="navbar__mobile">
        <div id="nav-icon1" className={classes.join(" ")} onClick={toggleClass} >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;