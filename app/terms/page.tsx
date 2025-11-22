"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function TermsPage() {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col lg={10}>
                    <Card className="shadow-sm border-0">
                        <Card.Body className="p-5">
                            <div className="text-center mb-5">
                                <h1 className="fw-bold text-dark">Terms & Conditions</h1>
                                <p className="text-muted">Updated: 22/11/2025</p>
                            </div>

                            <div className="terms-content">
                                <section className="mb-4">
                                    <h3 className="h5 fw-bold text-dark mb-3">1. Hak Cipta</h3>
                                    <p className="text-muted">
                                        Semua karya illustrasi, desain karakter, game, dan konten lainnya dimiliki oleh <strong className='text-danger'>Jansen Vanesco</strong>. Dilarang <strong className='text-danger'> KERAS </strong> untuk memperbanyak, mendistribusikan, atau menggunakan konten tanpa izin oleh pemilik.
                                    </p>
                                </section>

                                <section className="mb-4">
                                    <h3 className="h5 fw-bold text-dark mb-3">2. Portfolio</h3>
                                    <p className="text-muted">
                                        Karya yang ditampilkan di website ini hanya untuk keperluan portfolio dan demonstrasi.
                                    </p>
                                </section>

                                <section className="mb-4">
                                    <h3 className="h5 fw-bold text-dark mb-3">3. Layanan</h3>
                                    <p className="text-muted">
                                        Layanan yang ditawarkan pada page ini bersifat tidak nyata. Ini hanya untuk demonstrasi website
                                    </p>
                                </section>

                                <section className="mb-4">
                                    <h3 className="h5 fw-bold text-dark mb-3">4. Privasi Pengguna</h3>
                                    <p className="text-muted">
                                        Data pribadi yang dikirim pada form tidak akan sampai ke pemilik website
                                    </p>
                                </section>

                                <section className="mb-4">
                                    <h3 className="h5 fw-bold text-dark mb-3">5. Kontak</h3>
                                    <p className="text-muted">
                                        Untuk pertanyaan mengenai terms & conditions lebih lanjut, silakan hubungi email: 
                                        <a href="mailto:jansen.535240148@stu.untar.ac.id" className="text-decoration-none ms-1">
                                            jansen.535240148@stu.untar.ac.id
                                        </a>
                                    </p>
                                </section>
                            </div>

                            <div className="text-center mt-5">
                                <Link href="/" className="btn btn-outline-primary">
                                    ~ Kembali ke Home
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}