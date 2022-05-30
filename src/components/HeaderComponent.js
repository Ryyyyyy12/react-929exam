import React, { Component, useState } from 'react'
import { Navbar, NavbarBrand , NavbarToggler , Collapse , Nav , NavItem , NavLink , UncontrolledDropdown , DropdownToggle , DropdownItem , NavbarText , DropdownMenu } from 'reactstrap';
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
                        <NavLink href="Homepage.js">
                        Home
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="Aboutme.js">
                            About me
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="PhotoGallery.js">
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
