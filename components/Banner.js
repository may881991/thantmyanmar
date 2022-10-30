import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Banner = (props) => {
  return ( 
      <Container fluid>
        <Row>
          <Col md={7} className='d-flex p-0'>
            <img src={props.data.img} alt={props.data.img} className='w-100'/>
          </Col>
          <Col  md={5} className='d-flex m-0'>
            <div className='mx-5 bannerText'>
              <h1 className='text-center mt-5 mb-4'>{props.data.title}</h1>
              <p>{props.data.des1}</p>
              <p>{props.data.des2}</p>
              <p>{props.data.des3}</p>
            </div>
          </Col>
        </Row>
    </Container>
  );
}

export default Banner;