import React from 'react';
import { Container, Row, Col ,Button} from "reactstrap";

const Gallery = () => { 
  const imageList = [
    "gallery1.png", 
    "gallery2.png", 
    "gallery3.png", 
    "gallery4.png", 
    "gallery5.png",
    "gallery6.png"
  ]
  console.log(imageList[1])
  return (
    <section className="section bg-light pb-5" id="resources">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h1 className="my-5 font-weight-normal text-center">Gallery</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <Row>
              <Col md={7} className="p-0"> 
                <img src={"/images/" + imageList[0]} alt={imageList[0]} className="img-fluid"/>
                <img src={"/images/" + imageList[1]} alt={imageList[1]} className="img-fluid" style={{height: '225px'}}/>
              </Col>
              <Col md={5} className="p-0">
                <img src={"/images/" + imageList[2]} alt={imageList[2]} className="img-fluid" style={{height: '483px'}}/>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="p-0"> 
            <Row>
              <Col md={12} className="p-0">
                <img src={"/images/" + imageList[3]} alt={imageList[3]} className="img-fluid"/>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="p-0"> 
                <img src={"/images/" + imageList[4]} alt={imageList[4]} className="img-fluid" style={{height: '231px'}}/>
              </Col>
              <Col md={6} className="p-0"> 
                <img src={"/images/" + imageList[5]} alt={imageList[5]} className="img-fluid"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;