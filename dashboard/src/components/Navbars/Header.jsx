import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Container
} from "reactstrap";

import routes from "../../routes";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent"
    };

    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
  }
  
  toggle() {
    if (this.state.isOpen) {
      this.setState({ color: "transparent" });
    } else {
      this.setState({ color: "dark" });
    }
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  dropdownToggle(e) {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }
  
  getBrand() {
    let brandName;
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  }
  
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }

  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({ color: "dark" });
    } else {
      this.setState({ color: "transparent" });
    }
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }
  
  render() {
    return (
      <Navbar expand="lg"
        color={this.props.location.pathname.indexOf("full-screen-maps") !== -1 ? "dark": this.state.color}
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top" : "navbar-absolute fixed-top " + 
            (this.state.color === "transparent" ? "navbar-transparent " : "")
        }>
        
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" ref={this.sidebarToggle} className="navbar-toggler" onClick={() => this.openSidebar()}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
          </div>

          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-dots" />
            <span className="navbar-toggler-bar navbar-dots" />
            <span className="navbar-toggler-bar navbar-dots" />
          </NavbarToggler>

          <Collapse isOpen={this.state.isOpen} navbar className="justify-content-end">
            <Nav navbar>
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={e => this.dropdownToggle(e)}>
                <DropdownToggle caret nav>
                  <p>Menu</p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a">Action 1</DropdownItem>
                  <DropdownItem tag="a">Action 2</DropdownItem>
                  <DropdownItem tag="a">Action 3</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <Link to="#settings" className="nav-link">
                  <i className="fa fa-cog"/>
                  <p><span className="d-lg-none d-md-block">Settings</span></p>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
          
        </Container>
      </Navbar>
    );
  }
}

export default Header;
