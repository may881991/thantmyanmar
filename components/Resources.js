import React , {useState} from 'react';
import { Container, Row, Col, Nav ,NavItem ,NavLink , TabContent, TabPane, Card, CardTitle, CardText, CardBody , Button} from "reactstrap";
import classnames from 'classnames';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('1');
  const tabToggle = (tab) => {
    setActiveTab(tab)
  }
  return (
    <section className="section bg-light pb-5" id="resources">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h1 className="my-5 font-weight-normal text-center">Resources</h1>
            </div>
          </Col>
        </Row>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => tabToggle('1')}
            >
              Awarennes Raising
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => tabToggle('2')}
            >
              Plastic Bag Campaign 
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
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
        <div className="text-center mt-3"> 
          <Button color="success" className="px-4">
            View All
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Resources;