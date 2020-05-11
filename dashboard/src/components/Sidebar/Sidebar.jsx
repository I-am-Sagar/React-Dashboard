import React from "react";

import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

import logo from "../../orphan-medical.svg";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  render() {
    return (
      <div className="sidebar">

        <div className="logo">
          <a href="/" ><img src={logo} alt="Orphan Medical"/></a>
        </div>
        <div className="sidebar-wrapper">
          <Nav>
            {this.props.routes.map((prop, key) => {
              return (
                <li className={ this.activeRoute(prop.path) + (prop.pro ? " active-pro" : "")} key={key}>
                  <NavLink to={prop.layout + prop.path} className="nav-link">
                    <i className={prop.icon} /> <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>

      </div>
    );
  }
}

export default Sidebar;
