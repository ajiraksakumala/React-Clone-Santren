import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import Footer from '../components/Footer';

export default class NotFound extends Component {
    render() {
        return (
            <div className="mt-76">
                <Container className="text-center">
                    <Row>
                        <Col md="12">
                            <h1>Page Not Found</h1>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <Footer />
            </div>
        );
    }
}