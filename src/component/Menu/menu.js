import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container
  } from "reactstrap";

function MenuHeader() {
    const [collapseOpen] = React.useState(false);
    return(
        <Navbar className={"fixed-top navbar-transparent"} color-on-scroll="100" expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand to="/" tag={Link} id="navbar-brand">
                        <span>ÂM NHẠC• </span>
                        Là Cuộc Sống
                    </NavbarBrand>
                </div>
                <Collapse
                className={"justify-content-end "}
                navbar
                isOpen={collapseOpen}
                >
                    <Nav navbar>
                        <NavItem className="p-0">
                            <NavLink href="#">
                                <i className="fab fa-twitter" />
                            </NavLink>
                        </NavItem>
                        <NavItem className="p-0">
                            <NavLink href="#">
                                <i className="fab fa-facebook-square" />
                            </NavLink>
                        </NavItem>
                        <NavItem className="p-0">
                            <NavLink href="#">
                                <i className="fab fa-instagram" />
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav>
                            <DropdownToggle caret
                                color="default"
                                data-toggle="dropdown"
                                href="#pablo"
                                nav
                            >
                                <i className="fa fa-cogs d-lg-none d-xl-none" />
                                Getting started
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-with-icons">
                                <DropdownItem tag={Link} to="/register-page">
                                <i className="fas fa-user-plus"></i>
                                Register Page
                                </DropdownItem>
                                <DropdownItem tag={Link} to="/profile-page">
                                <i className="far fa-address-book"></i>
                                Profile Page
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                        <Button
                            className="nav-link d-none d-lg-block"
                            color="primary"
                            href=""
                        >
                            <i className="fas fa-music"></i> Đăng Ký Ngay
                        </Button>
                        </NavItem>
                        <NavItem>
                        <Button
                            className="nav-link d-none d-lg-block"
                            color="primary"
                            href=""
                        >
                            <i className="fas fa-music"></i> Đăng Nhập
                        </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}
export default MenuHeader;