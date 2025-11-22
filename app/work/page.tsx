"use client";

import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const works = [
    {
        id: 1,
        title: "No Intent",
        category: "Character Design",
        description: "Illustrasi hitam-putih (monochrome) yang menampilkan karakter wanita tanpa latar belakang",
        imageSrc: "/images/try1.png",
        date: "9 November 2025",
        time: "8 - 12 Jam",
    },
    {
        id: 2,
        title: "Hanami-Festive",
        category: "Character Design",
        description: "Fanart karakter 'Aria' dari game 'Phantom Rose 2'",
        imageSrc: "/images/eventCollab.png",
        date: "20 Mei 2025",
        time: "18 - 23 Jam",
    },
    {
        id: 3,
        title: "Mi-Cat",
        category: "Character Design",
        description: "Fanart karakter 'Hatsune Miku' dengan art style mangaka 'Yukiko Nozawa'",
        imageSrc: "/images/HatsuneMikuYukikoNozawa.png",
        date: "19 Januari 2025",
        time: "8 - 11 Jam",
    },
    {
        id: 4,
        title: "Slice & Slime",
        category: "Game",
        description: "Game Top Down Survival RPG dengan mekanik sederhana",
        imageSrc: "/images/game1.jpeg",
        date: "8 September 2025",
        time: "25 - 30 Jam",
    }
];

function WorkPage() {
    return (
        <main>
            <div className="workpage-bg">
                <Container className="my-5">
                    <Row className="mb-5">
                        <Col className="text-center">
                            <h1 className="fw-bold text-dark mb-3">Daftar Portfolio</h1>
                            <p className="text-muted lead">
                                Kumpulan semua ilustrasi, game, cerita, dan proyek lainnya yang dibuat
                            </p>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/" className="text-decoration-none">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Portfolio</li>
                                </ol>
                            </nav>
                        </Col>
                    </Row>

                    <Row>
                        {works.map((work) => (
                            <Col lg={6} className="mb-4" key={work.id}>
                                <Card className="h-100 shadow-sm border-0 bg-white">
                                    <Row className="g-0 h-100">
                                        <Col md={5}>
                                            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                                <Image
                                                    src={work.imageSrc}
                                                    alt={work.title}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                        </Col>
                                        <Col md={7}>
                                            <Card.Body className="d-flex flex-column h-100">
                                                <div className="mb-2">
                                                    <Badge
                                                        bg={work.category === 'Game' ? 'primary' : 'secondary'}
                                                        className="mb-2"
                                                    >
                                                        {work.category}
                                                    </Badge>
                                                </div>
                                                <Card.Title className="h5 fw-bold text-dark">
                                                    {work.title}
                                                </Card.Title>
                                                <Card.Text className="text-muted small flex-grow-1">
                                                    {work.description}
                                                </Card.Text>
                                                <div className="mt-auto">
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <small className="text-muted">
                                                            <i className="bi bi-calendar me-1"></i>
                                                            {work.date}
                                                        </small>
                                                        <small className="text-muted">
                                                            <i className="bi bi-clock me-1"></i>
                                                            {work.time}
                                                        </small>
                                                    </div>
                                                    <Link
                                                        href={`/work/${work.id}`}
                                                        className="btn btn-outline-primary btn-sm w-100"
                                                    >
                                                        Lihat Detail
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {works.length === 0 && (
                        <Row>
                            <Col className="text-center py-5">
                                <div className="text-muted">
                                    <i className="bi bi-inbox display-1"></i>
                                    <h4 className="mt-3 text-dark">Belum ada karya</h4>
                                    <p className="text-dark">Karya akan segera ditambahkan.</p>
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </div>
        </main>
    );
}

export default WorkPage;