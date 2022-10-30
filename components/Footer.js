import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { FiFacebook, FiLinkedin, FiMail, FiMapPin, FiPhone} from "react-icons/fi";

const Footer = () => { 
  return (
    <section className="footer section" id='contact'>
      <Container className="text-white pb-3">
        <Row>
          <Col lg={4}>
              <div className="mb-4">
                <img src="/images/tm-logo-f.png" alt="" className="img-fluid d-block"/> 
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col md={5}>
                <h6 className="mb-3">Contact Information</h6>
                <ul className="list-unstyled company-sub-menu">
                  <li className="list-inline-item d-flex"><FiMapPin /><a href="/">No.123, abc street, abc Tsp, Yangon.</a></li>
                  <li className="list-inline-item d-flex"><FiMail /><a href="/">contact@thantmyanmar.com</a></li>
                  <li className="list-inline-item d-flex"><FiPhone /><a href="/">+95 9 775 979 982</a></li>
                </ul>
              </Col>
              <Col md={3}>
                <h6 className="mb-3">Navigate</h6>
                <ul className="list-unstyled company-sub-menu">
                  <li className="list-inline-item d-block"><a href="/">Home</a></li>
                  <li className="list-inline-item d-block"><a href="/">Our Updates</a></li>
                  <li className="list-inline-item d-block"><a href="/">Resources</a></li>
                  <li className="list-inline-item d-block"><a href="/">Events</a></li>
                  <li className="list-inline-item d-block"><a href="/">Contact Us</a></li>
                </ul>
              </Col>
              <Col md={2}>
                <h6 className="mb-3">Connect</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><FiFacebook /></a></li>
                  <li className="list-inline-item"><a href="#"><FiLinkedin /></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> 
      <Container fluid> 
        <Row className="py-3 bg-dark">
            <Col md={12}>
              <div className="text-center text-light">
                <p className="mb-0 f-15">© 2022 Thant Myanmar. All rights reserved.</p>
              </div>
            </Col>
          </Row> 
      </Container>
    </section>
  );
}

export default Footer;