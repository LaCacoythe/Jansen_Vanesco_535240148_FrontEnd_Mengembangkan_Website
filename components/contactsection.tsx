"use client"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function ContactSection() {
    return (
        <Container className="my-5 py-5">
            <Row className="justify-content-center">
                <Col md={10} lg={8} className="mb-3">
                    <Card className="border-0 shadow-lg">
                        <Card.Body className="p-4 p-md-5">
                            <div className="text-center mb-4">
                                <h2 className="fw-bold">Kontak Saya</h2>
                                <p className="text-muted">
                                    Tertarik untuk kolaborasi? Atau memiliki pertanyaan 
                                    sekadar <strong>komisi illustrasi</strong> / <strong>game development</strong>? Silahkan mengisi formulir dibawah
                                </p>
                            </div>
                            
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formName">
                                            <Form.Label>Nama</Form.Label>
                                            <Form.Control type="text" placeholder="Nama Anda" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="email@example.com" required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="formSubject">
                                    <Form.Label>Subyek</Form.Label>
                                    <Form.Select aria-label="Pilih topik">
                                        <option>Pilih tujuan pesan</option>
                                        <option value="commission">Art Commission / Ilustrasi</option>
                                        <option value="gamedev">Game Development / Prototyping</option>
                                        <option value="story">Story Writing / Lore</option>
                                        <option value="other">Lainnya</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label>Pesan</Form.Label>
                                    <Form.Control as="textarea" rows={6} placeholder="Ceritakan detail proyek atau pertanyaan Anda..." required />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="lg" type="submit">
                                        Kirim Pesan
                                    </Button>
                                </div>
                            </Form>    
                        </Card.Body>    
                    </Card>    
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;