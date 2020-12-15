
import React from "react";
import { Container } from "reactstrap";

function HomePage() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
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
        <div className="content-center brand">
          <h3 className="d-none d-sm-block">
            Âm Nhạc Là Cuộc Sống
          </h3>
        </div>
      </Container>
    </div>
  );
}
export default HomePage;
