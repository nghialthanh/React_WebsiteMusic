
import React from "react";
import { Container } from "reactstrap";
import {Carousel} from '3d-react-carousal';
let slides = [
  <img  src={require("../../../assets/img/4.jpg").default} alt="1" />,
  <img  src={require("../../../assets/img/1.jpg").default} alt="1" />,
  <img  src={require("../../../assets/img/2.jpg").default} alt="1" />,
  <img  src={require("../../../assets/img/3.jpg").default} alt="1" />  ];
function GalleryImage() {
  return (
    
    <div className="page-header header-filter">
      {/* <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" /> */}
      
      <Container>
        <Carousel slides={slides} autoplay={true} interval={3000}/>
      </Container>
    </div>
  );
}
export default GalleryImage;
