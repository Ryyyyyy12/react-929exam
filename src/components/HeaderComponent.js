import React, { Component, useState } from 'react'
import { Navbar, NavbarBrand , NavbarToggler , Collapse , Nav , NavItem , UncontrolledDropdown , DropdownToggle , DropdownItem , NavbarText , DropdownMenu } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };

    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    render(){
        return (
            <div>
                <div>
                <Navbar
                    expand="md"
                    dark
                >   
                    <NavbarBrand href="/">
                        9to9
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse navbar isOpen={this.state.isNavOpen}>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                        <NavLink className="nav-link" to="/home">
                            Home
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/aboutme">
                            About me
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/gallery">
                            Gallery
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        Login
                    </NavbarText>
                    </Collapse>
                </Navbar>
                </div>
                <div class="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 class="display-5 fw-bold">9to9 exam</h1>
                                <p class="col-md-8 fs-4">Kevalin Srisakulpong No.64130500207</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    
}

export default Header
