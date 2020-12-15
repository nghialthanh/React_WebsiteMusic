
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
                <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("../../assets/img/Nghia.jpg").default}
                />
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Landing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Profile
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href=""
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/d.t.n.01.10/"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://github.com/nghialthanh"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
