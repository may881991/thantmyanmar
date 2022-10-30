import React from 'react';
import Link from 'next/link'
import { Container, Row, Col } from "reactstrap";

const Feature = () => {

  const engagements = [
    {img:"./images/education.jpg",icon:"./images/edu.png", title : "Education", desc : "We work with schools and universities to teach about plastic and waste issues and its reduction" },
    {img:"./images/reduction.jpg",icon:"./images/wastereduce.png",title : "Waste Reduction Activity", desc : "We work with organizations, tourism industry and companies to reduce plastic waste " },
    {img:"./images/community.jpg",icon:"./images/com.png", title : "Community Waste Management", desc : "We work on community waste in rural and low income areas" },
    {img:"./images/research.jpg",icon:"./images/research.png", title : "Research", desc : "We do research on waste, support the government and collaborate to mitigate plastic pollution" }
  ]

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="my-5 font-weight-normal text-center">Engagements</h3>
              <p className="text-muted">Urban, rural and community waste management; education in schools and universities; waste reduction in companies and tourism industry; plastic pollution surveys and research projects</p>
            </div>
          </Col>
        </Row> 
      </Container>
      <Row>
          {
            engagements.map((engag, key) =>
              <Col key={key} lg={3} md={3} className="eng-col" 
                style={{
                  backgroundImage: `url(${engag.img})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100%'
                }}
              >
                <div className="card text-center card-body positioned">
                  <div className="avatar mx-auto white">
                      <img src={engag.icon} alt={engag.icon} />
                  </div>
                  <h5 className="text-white font-weight-normal pt-5 mb-4">{engag.title}</h5>
                  <p className="text-white mb-5 pb-5 des">{engag.desc}</p>
                  {
                    key == 0 &&
                    <div className="btn-group positioned" role="group" aria-label="Basic example">
                      <Link href="/edu/university">
                        <button type="button" className="btn btn-outline-light">University</button>
                      </Link>
                      <Link href="/edu/education">
                        <button type="button" className="btn btn-outline-light">School</button>
                      </Link>
                    </div>
                  } 
                  {
                    key == 1 &&
                    <div className="btn-group positioned" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-light">Community</button>
                        <button type="button" className="btn btn-outline-light">Organization</button>
                    </div>
                  }   
                   {
                    key == 2 &&
                    <div className="btn-group positioned" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-light">Rural</button>
                        <button type="button" className="btn btn-outline-light">Urban</button>
                    </div>
                  }     
                  {key > 2 &&
                    <button type="button" className="btn btn-outline-light">Read More</button>
                  }
                  
                </div>
              </Col>
            )
          } 
      </Row>
     
      {/* <Container fluid>
        <Row>
          <Col className='d-flex'>
            <div className=''>
              <h4>Education</h4>
            </div>
          </Col>
          <Col className='d-flex'>
            <div className=''>
              <h4>Waste Reduction Activity</h4>
            </div>
          </Col>
          <Col className='d-flex'>
            <div className=''>
              <h4>Community Waste Management</h4>
            </div>
          </Col>
          <Col className='d-flex'>
            <div className=''>
              <h4>Research</h4>
            </div>
          </Col>
        </Row>
      </Container> */}
    </section>
  );
}

export default Feature;
