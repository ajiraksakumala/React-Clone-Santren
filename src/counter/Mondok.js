import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import Jumbotron from '../components/JumbotronMondok';
import Footer from '../components/Footer';

export default class Mondok extends Component {
    render() {
        return (
            <div className="mt-76">
                <Jumbotron />
                <Container>
                    <Row className="text-center">
                        <Col md="12">
                            <h2>KABAR GEMBIRA <br/>UNTUK KAMU YANG PASSION DIBIDANG IT</h2>
                            <p className="desc">Santren Koding saat ini sedang membuka pendaftaran santri baru.<br/>Bidang keahlian yang dibuka adalah Mobile Development dan Web Development dengan jenjang 3 tahun lama masa pembelajaran dan live project.</p>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="6" className="text-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/poster.jpg?alt=media&amp;token=eeabff82-5d54-40fa-93ca-8f7bb208f6a6" alt="Santren" height="400px" />
                        </Col>
                        <Col md="6">
                            <h4>Fasilitas</h4>
                            <p>GRATIS BIAYA PENDIDIKAN <br/>
                            GRATIS UANG MAKAN DAN ASRAMA <br/>
                            TEMPAT BELAJAR YANG NYAMAN <br/>
                            RIHLAH 2 BULAN SEKALI</p>

                            <h4>Persyaratan</h4>
                            <p>MUSLIM <br/>
                            LAKI-LAKI (USIA MAKS 19TH) <br/>
                            MENGINAP/TINGGAL DI ASRAMA <br/>
                            BUKAN YANG MENGHALALKAN ROKOK <br/>
                            BERSUNGGUH-SUNGGUH <br/>
                            MEMPUNYAI LAPTOP <br/>
                            WAJIB HOBI NGODING <br/>
                            SIAP BELAJAR 16 JAM/HARI</p>

                            <h4>Periode</h4>
                            <p>PERIODE 1: Pendaftaran Tutup 18 Maret 2018 <br/>
                            PERIODE 2: Pendaftaran Tutup 31 Mei 2018 <br/>
                            PERIODE 3: Coming soon... <br/>
                            Muslimah (Untuk Perempuan): Coming soon...</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center">
                            <br/><br/>
                            <a href="https://s.id/daftarmondok" class="btn btn-success btn-lg">Daftar Sekarang!</a>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}