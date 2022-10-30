import React , {useState} from 'react';
import { Container, Row, Col, Nav ,NavItem ,NavLink , TabContent, TabPane, Card, CardTitle, CardText, CardBody} from "reactstrap";
import classnames from 'classnames'; 
import Link from 'next/link'
import {BsChevronDoubleRight } from 'react-icons/bs'

const courseLists = [
  {
    img: '/images/course1.png',
    title: 'Rural Solid Waste Management in Myanmar',
    youtube: "https://www.youtube.com/watch?v=j8l1YL9Vw60",
    udemy: "https://www.udemy.com/course/rural-solid-waste-management-in-myanmar/"
  },
  {
    img: '/images/course2.png',
    title: 'Behaviour Change to Reduce Waste',
    youtube: "https://www.youtube.com/watch?v=j8l1YL9Vw60",
    udemy: "https://www.udemy.com/course/rural-solid-waste-management-in-myanmar/"
  },
  {
    img: '/images/course3.png',
    title: 'Introduction to Marine Ecotourism',
    youtube: "https://www.youtube.com/watch?v=j8l1YL9Vw60",
    udemy: "https://www.udemy.com/course/rural-solid-waste-management-in-myanmar/"
  },
  {
    img: '/images/course4.png',
    title: 'Hydropower',
    youtube: "https://www.youtube.com/watch?v=j8l1YL9Vw60",
    udemy: "https://www.udemy.com/course/rural-solid-waste-management-in-myanmar/"
  }
]

const Courses = () => {
  const [activeTab, setActiveTab] = useState('1');
  const tabToggle = (tab) => {
    setActiveTab(tab)
  }
  return (
    <section className="section bg-light pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h1 className="my-5 font-weight-normal text-center">Courses</h1>
            </div>
          </Col>
        </Row>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => tabToggle('1')}
            >
              Waste Management
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => tabToggle('2')}
            >
              Marine Science
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => tabToggle('3')}
            >
              Sustainable Development
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => tabToggle('3')}
            >
              Water
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              {courseLists.map((data, key) => ( 
                <Col md={3} className="my-3" key={key}>
                    <Card className='shadow-sm'>
                      <CardBody>
                        <img src={data.img} className="img-fluid mb-3" alt={data.img} />
                        <CardTitle className='mb-3 text-center'>{data.title}</CardTitle>
                        <label className='mb-3 platform-label'>Available Platform</label>
                        <CardText className='youtube-link d-flex flex-row align-items-start'>
                          <img src='/images/udemy-icon.png' className='me-2' alt='youtube' />
                          <Link href={data.udemy} className="pt-1"> Udemy </Link> <BsChevronDoubleRight className='m-1' /> 
                        </CardText>
                        <CardText className='youtube-link d-flex flex-row align-items-start'>
                          <img src='/images/youtube-icon.png' className='me-2' alt='youtube' />
                          <Link href={data.youtube} className="pt-1"> Youtube </Link><BsChevronDoubleRight className='m-1' /> 
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row> 
              <Col md={3} className="my-3">
                <Card>
                  <img src="/images/resource3.png" className="card-img-top" alt="yekutho" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={3} className="my-3">
                <Card>
                  <img src="/images/resource4.png" className="card-img-top" alt="yekutho" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={3} className="my-3">
                <Card>
                  <img src="/images/yekutho1.png" className="card-img-top" alt="yekutho" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={3} className="my-3">
                <Card>
                  <img src="/images/resource2.png" className="card-img-top" alt="yekutho" />
                  <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent> 
      </Container>
    </section>
  );
}

export default Courses;