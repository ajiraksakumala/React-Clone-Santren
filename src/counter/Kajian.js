import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default class Kajian extends Component {
    render() {
        return (
            <div className="mt-76">
                <Container className="text-center">
                    <Row>
                        <Col md="12">
                            <h2>Daftar Kajian Koding Rutin</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" sm="12">
                            <Card title="Kajian Koding #3" subtitle="ReactJS dan Firebase Auth/Hosting" author="by Santren Koding" url="https://stupefied-sinoussi-5d6f8f.netlify.com/images/1.png"/>
                        </Col>
                        <Col md="4" sm="12">
                            <Card title="Kajian Koding #2" subtitle="html, css, boostrap dasar" author="by Santren Koding" url="https://stupefied-sinoussi-5d6f8f.netlify.com/images/2.png"/>
                        </Col>
                        <Col md="4" sm="12">
                            <Card title="Kajian Koding #1" subtitle="Belajar Laravel Dasar" author="by Santren Koding" url="https://stupefied-sinoussi-5d6f8f.netlify.com/images/3.png"/>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <Footer />
            </div>
        );
    }
}