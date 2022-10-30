import React from 'react';
import Link from 'next/link'
import { Container, Row, Col, Card, CardTitle, CardText, CardBody , Button} from "reactstrap";

const EduResources = (props) => { 
  const resourceLists = props.data;
  return (
    <section className="section pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h1 className="my-5 font-weight-normal text-center">EduResources</h1>
            </div>
          </Col>
        </Row> 
        <Row>
        {resourceLists.map((data, key) => ( 
            <Col md={4} className="resbox" key={key}>
              <Card className='shadow-sm m-3 p-2'>
                <CardBody>
                  <img src={data.img} className="card-img-top mb-3" alt={data.img} />
                  <CardTitle className='mb-3'>{data.title}</CardTitle>
                  <CardText>{data.des}</CardText>
                </CardBody>
                {data.download === true && ( 
                  <>
                    <Button color="success" outline className="px-4">
                      Download
                    </Button> 
                    <CardText className='my-2 text-center'>{data.size}</CardText>
                  </>
                )} 
                {data.links.map((link) => ( 
                  <CardText className='mx-3 youtube-link d-flex flex-row align-items-start'>
                    <img src='/images/youtube-icon.png' className='me-2 mt-1' alt='youtube' />
                    <Link href={link} key={link}>{link}</Link>
                  </CardText>
                ))} 
              </Card>
            </Col>
          ))
        }
        </Row>
      </Container>
    </section>
  );
}

export default EduResources;