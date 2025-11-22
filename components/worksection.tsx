'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const works = [
  {
    id: 1,
    title: "No Intent",
    category: "Character Design",
    description: "Illustrasi hitam-putih (monochrome) yang menampilkan karakter wanita tanpa latar belakang",
    imageSrc: "/images/try1.png",
  },
  {
    id: 2,
    title: "Hanami-Festive",
    category: "Character Design",
    description: "Fanart karakter 'Aria' dari game 'Phantom Rose 2'",
    imageSrc: "/images/eventCollab.png",
  },
  {
    id: 3,
    title: "Mi-Cat",
    category: "Character Design",
    description: "Fanart karakter 'Hatsune Miku' dengan art style mangaka 'Yukiko Nozawa'",
    imageSrc: "/images/HatsuneMikuYukikoNozawa.png",
  },
  {
    id: 4,
    title: "Slice & Slime",
    category: "Game",
    description: "Game Top Down Survival RPG dengan mekanik sederhana",
    imageSrc: "/images/game1.jpeg",
  }
];

function WorkSection() {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col md={12} className="text-center">
          <h2 className="fw-bold text-dark">Illustrasi & Game</h2>
          <p className="text-muted">Daftar terbaru</p>
        </Col>
      </Row>

      <Row>
        {works.map((art) => (
          <Col md={3} className="mb-4" key={art.id}>
            <Card className="h-100 shadow-sm border-0">
              <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                <Image 
                  src={art.imageSrc} 
                  alt={art.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="card-img-top"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                    <span className="badge bg-secondary">{art.category}</span>
                </div>
                <Card.Title>{art.title}</Card.Title>
                <Card.Text className="text-muted small">
                  {art.description}
                </Card.Text>
                
                <div className="mt-auto">
                    <Link href={`/work/${art.id}`} passHref legacyBehavior>
                        <Button variant="outline-primary" className="w-100">Lihat Detail</Button>
                    </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
    <Col className="text-center">
      <Link href="/work" className="btn btn-outline-primary">
        Lihat Semua Karya ~
      </Link>
    </Col>
  </Row>
    </Container>
  );
}

export default WorkSection;