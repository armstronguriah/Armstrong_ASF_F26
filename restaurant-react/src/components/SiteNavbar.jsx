import {Navbar, NavbarBrand, NavbarToggler, Collapse, NavLink, Nav, NavItem, Container} from 'reactstrap'
import {useState} from "react";
import {NavLink as RouterNavLink} from "react-router";

import {Link} from 'react-router'

export const SiteNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <Navbar className="brass-navbar" expand="md" dark container={false}>
            <Container>
                <NavbarBrand
                    tag={Link}
                    to="/"
                    className="nav-brand d-flex align-items-center gap-2"
                    onClick={closeMenu}
                >
                    <img
                        src="/images/brass-bulldog-logo.png"
                        alt=""
                        className="navbar-logo"
                    />

                    <span>Brass Bulldog</span>
                </NavbarBrand>

                <NavbarToggler
                    onClick={toggle}
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    aria-controls="brass-navigation"
                    className="ms-auto"
                />

                <Collapse
                    isOpen={isOpen}
                    navbar
                    id="brass-navigation"
                >

                    <Nav className={"ms-auto text-end"} navbar>
                            <NavItem>
                                <NavLink
                                    tag={RouterNavLink}
                                    to="/"
                                    end
                                    onClick={closeMenu}
                                >
                                    Home
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    tag={RouterNavLink}
                                    to="/menu"
                                    onClick={closeMenu}
                                >
                                    Menu
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    tag={RouterNavLink}
                                    to="/reservations"
                                    onClick={closeMenu}
                                >
                                    Reservations
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    tag={RouterNavLink}
                                    to="/cart"
                                    onClick={closeMenu}
                                >
                                    Cart
                                </NavLink>
                            </NavItem>
                        </Nav>
                </Collapse>
            </Container>
        </Navbar>
)
}