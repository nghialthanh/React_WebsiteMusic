import React from "react";
import { Link ,NavLink as RRNavLink} from "react-router-dom";
import {
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav
  } from "reactstrap";

function MenuVertical(props) {
    return(
        <Navbar className="fixed-bottom navbar-vertical" color-on-scroll="100" expand="md" >
                    <NavbarBrand to="/" tag={Link} id="navbar-brand">
                        
                        <div className="centered back"></div>
                            <div className="centered face"></div>

                            <div className="centered headphones">
                                <div className="centered band"></div>
                                <div className="earmuff"></div>
                                <div className="earmuff"></div>
                            </div>
                            <div className="centered music">
                                <div className="group1">
                                    <div className="wave"></div>
                                    <div className="wave"></div>
                                    <div className="wave"></div>
                                </div>
                                <div className="group2">
                                    <div className="wave"></div>
                                    <div className="wave"></div>
                                    <div className="wave"></div>
                                </div>
                            </div>
                            {/* <span>ÂM NHẠC• </span>Là Cuộc Sống */}
                    </NavbarBrand>
                
                    <Nav navbar vertical>
                    <NavItem className="p-0">
                        <NavLink exact to="/KhamPha" tag={RRNavLink} activeClassName="active-nav-link">
                                <i className="fas fa-fire"/>
                                <span>Khám Phá</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="p-0">
                            <NavLink  >
                                <i className="fas fa-chart-line" />
                                <span>Bảng Xếp Hạng</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="p-0">
                            <NavLink   >
                                <i className="far fa-play-circle" />
                                <span>Music Video</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="p-0">
                            {/* <NavLink  exact to={{pathname:"/KhamPha",state: {index: props.index,handleSetAudioPlay: props.handleSetAudioPlay}}} tag={RRNavLink} activeClassName="active-nav-link" > */}
                            <NavLink  exact to="/MoiPhatHanh" tag={RRNavLink} activeClassName="active-nav-link" >    
                                <i className="fas fa-music" />
                                <span>Mới Phát Hành</span>
                            </NavLink>
                        </NavItem>            
                    </Nav>
            
        </Navbar>
    )
}
export default MenuVertical;