import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div className="footer">
        <Container>
            <Row>
                <Col md="12">
                    <p>Copyright &copy; Santren Koding 2018. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Example;
