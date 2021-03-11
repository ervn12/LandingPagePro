import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar color="light" light sticky="top" expand="md" >
                    <NavbarBrand className="navbar-brand ml-5" href="/">
                        E
                    </NavbarBrand>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="text-center text-uppercase mx-auto">
                                <NavItem className="px5">
                                    <NavLink className="nav-link px-5" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link px-5" to="/directory">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link px-5" to="/aboutus">
                                        Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link px-5" to="/contactus">
                                        Connect
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavbarComponent;