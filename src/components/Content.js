import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <Container>
        <Row className="text-center box-shadow box">
            <Col md="6" className="box-green">
                <br />
                <h4>Kegiatan</h4>
                <br />
                <p>Koding</p>
                <p>Belajar Agama dan Al Qur'an</p>
                <p>Pendidikan Karakter</p>
            </Col>
            <Col md="6" className="box-white">
                <br />
                <img src="http://i63.tinypic.com/oid9xu.png"/>
                <h4>"Memberi Manfaat Untuk Ummat"</h4>
                <br />
                <p>-Santren Koding-</p>
                <br />
            </Col>
        </Row>
    </Container>
  );
};

export default Example;
