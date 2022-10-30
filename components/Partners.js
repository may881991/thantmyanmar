import React from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import dynamic from 'next/dynamic';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});

const Partners = () => {
  const imageList = [
    "partner-1.png", 
    "partner-2.png", 
    "partner-3.png", 
    "partner-4.png", 
    "partner-5.jpeg",
    "partner-6.png", 
    "partner-7.png",
    "partner-8.jpeg", 
    "partner-9.png", 
    "partner-10.jpeg",
    "partner-11.jpeg",
    "partner-12.jpeg",
    "partner-13.jpeg",
    "partner-14.png",
    "partner-15.jpeg"
  ]
  return (
    <section className="section position-relative" id="partner">
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="pr-lg-5"> 
              <h1 className="my-5 font-weight-normal text-center">Partners</h1>
              <OwlCarousel className='owl-theme' items={6} loop margin={10} nav autoplay={true}> 
                {imageList.map((data, key) => (
                    <Col className="item" key={key}> 
                      <img src={"/images/" + data} alt={data} className="img-fluid mx-auto d-block"/>
                     </Col>
                    ))
                  }
              </OwlCarousel> 
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Partners;