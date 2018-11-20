import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <Container>
        <Row className="text-center">
            <Col md="12">
                <br/>
                <br/>
                <h3>Kontak</h3>
                <br />
                <i class="anticon anticon-phone"></i><span>082225111587</span>
                <br/>
                <i class="anticon anticon-mail"></i><span>santrenkoding@gmail.com</span>
                <br/><br/>
                <i class="anticon anticon-environment"></i><span>Titik Ruang Space,</span>
                <br/><span>Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,</span>
                <br/><span>Kota Semarang, Jawa Tengah 50269</span>
            </Col>
        </Row>
    </Container>
  );
};

export default Example;
