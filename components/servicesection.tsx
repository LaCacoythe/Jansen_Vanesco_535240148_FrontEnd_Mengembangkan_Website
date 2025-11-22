'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
    {
        id: 1,
        title: "Character Design",
        description: "Merancang karakter orisinal (OC) untuk karakter game, novel, atau manga",
        icon: "/images/pencil1.png"
    },
    {
        id: 2,
        title: "Game Development",
        description: "Membuat mekanik game unik, desain level menarik, dan aset visual",
        icon: "/images/joystick1.jpg"
    },
    {
        id: 3,
        title: "World Building & Story",
        description: "Menulis world building pada game, novel, atau karakter",
        icon: "/images/book2.png"
    }
];

function ServiceSection() {
    return (
        <Container className='my-5 py-4'>
            <Row className='mb-4'>
                <Col className='text-center'>
                    <h2 className='fw-bold text-dark'>My Services</h2>
                    <p className='text-muted'>Apa saja yang bisa saya kerjakan</p>
                </Col>
            </Row>
            <Row>
                {services.map((service) => (
                    <Col md={4} key={service.id} className='mb-4'>
                        <Card className='h-100 text-center border-0 shadow-sm p-4 hover-effect'>
                            <div className='mb-3 d-flex justify-content-center'>
                                <div style={{ width: '80px', height: '80px', position: 'relative' }}>
                                    <img 
                                        src={service.icon} 
                                        alt={service.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                            <Card.Body>
                                <h4 className='fw-bold'>{service.title}</h4>
                                <Card.Text className='text-muted'>
                                    {service.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ServiceSection;