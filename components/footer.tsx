"use client"
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="footer" className="pt-4 pb-3 bg-light">
            <Container>
                <Row>
                    <Col md={3}>
                        <h3 className="text-dark h5">Quick Links</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#home" className="text-decoration-none text-muted">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#about" className="text-decoration-none text-muted">Tentang Saya</a>
                            </li>
                            <li className="mb-2">
                                <a href="#works" className="text-decoration-none text-muted">Illustrasi & Game</a>
                            </li>
                            <li className="mb-2">
                                <a href="#services" className="text-decoration-none text-muted">My Services</a>
                            </li>
                            <li className="mb-2">
                                <a href="#contact" className="text-decoration-none text-muted">Contact</a>
                            </li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h3 className="text-dark h5">Follow Me</h3>
                        <ul className="list-unstyled d-flex gap-3 mb-4">
                            <li>
                                <a href="https://www.instagram.com/st_sct/" className="text-decoration-none text-dark">
                                    <i className="bi bi-instagram fs-5"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/LaCacoythe/Jansen_Vanesco_535240148_FrontEnd_Mengembangkan_Website" className="text-decoration-none text-dark">
                                    <i className="bi bi-github fs-5"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h3 className="text-dark h5">Terms</h3>
                        <ul className="list-unstyled text-muted small">
                            <li className="mb-1">
                                <Link href="/terms" className="text-decoration-none text-muted">
                                    <i className="bi bi-file-text me-2"></i>
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h3 className="text-dark h5">Contact Info</h3>
                        <ul className="list-unstyled text-muted small">
                            <li className="mb-1">
                                <i className="bi bi-envelope me-2"></i>
                                jansen.535240148@stu.untar.ac.id
                            </li>
                            <li className="mb-1">
                                <i className="bi bi-telephone me-2"></i>
                                +62 821-1465-7360
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <hr className="my-2" />
                        <p className="mb-0 text-muted small">
                            &copy; 2025 Jansen Vanesco - 535240148 All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}