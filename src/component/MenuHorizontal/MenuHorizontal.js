import React,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
  } from "reactstrap";

function MenuHorizontal() {
    const [_color, _setColor] = useState("navbar-horizonal-background");
    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return function cleanup() {
        window.removeEventListener("scroll", changeColor);
        };
    },[]);
    const changeColor = () => {
        if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
        ) {
        _setColor("navbar-horizonal-background-scroll");
        } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
        ) {
        _setColor("navbar-horizonal-background");
        }
    };
    return(
        <Navbar className={"navbar-horizonal "+_color} color-on-scroll="100" expand="md" >     
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><i className="fas fa-search"></i></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."/>                    
            </InputGroup>       
            <Nav navbar className="navbar-child">    
                                
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
                {/* <NavItem>
                    <Button
                        className="nav-link d-none d-lg-block"
                        color="primary"
                        href=""
                    >
                        <i className="fas fa-music"></i> Đăng Ký Ngay
                    </Button>
                </NavItem> */}
                <NavItem>
                    <NavLink href="#">
                        <img src={require("../../assets/img/Nghia.jpg").default} alt="avatar"/>
                    </NavLink>
                </NavItem>
            </Nav>             
        </Navbar>
    )
}
export default MenuHorizontal;