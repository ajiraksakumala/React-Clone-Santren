import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card className="Card card">
        <CardImg top width="100%" src={ props.url } alt="Card image" />
        <CardBody className="text-left">
          <CardTitle>{ props.title }</CardTitle>
          <p>{ props.subtitle }</p>
          <Row>
              <Col md="6" xs="6">
                <a className="small card-author" href="#">{ props.author }</a>
              </Col>
              <Col md="6" xs="6" className="text-right">
                <p className="small text-danger">Kuota Terbatas</p>
              </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
