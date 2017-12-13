import React from 'react';
import {Link} from 'react-router';
import '../css/header.css';

class Header extends React.Component{
  render(){
    const nav_titles = ["Technologies", "Products", "Patents", "Publications", "Photos", "Bio"];
    const nav_links = nav_titles.map(title => (<Link to={`/${title.toLowerCase()}`} className="nav-link clickable">{title}</Link>));
    return(
      <div className="header">
        <Link to={'/'}>
          <div className="logo-title">
            Ninovatech
          </div>
        </Link>
        <div className="header-links">
          {nav_links}
        </div>
      </div>
    );
  }
}

export default Header;
