'use client';

import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const works = [
    {
        id: 1,
        title: "No Intent",
        category: "Character Design",
        imageSrc: "/images/try1.png",
        date: "9 November 2025",
        time: "8 - 12 Jam",
        descriptionDetails: "Pada illustrasi ini, saya menyalin seorang cosplayer. Pose dan arah gerak tubuhnya mirip namun, saya mengubahnya menjadi style anime. Pada illustrasi ini, saya eksperimen mengenai shadow, backlight yang terang, dan arah gerak karakter. Menurut saya, pada gambar ini terdapat beberapa kekurangan yang bisa saya perbaiki, yaitu pada bagian kedua lengan bagian bawah pakaian volume dan bentuknya sedikit aneh. Pada bagian rambut, ada helai gelap sehingga kesan karakter menjadi memiliki rambut yang diwarnai. Pita dari karakter terlihat aneh untuk bentuk dan arah jatuhnya.",
        additionalInfo: {
            software: "Clip Studio Paint",
            tablet: "Huion Kamvas 13",
            resolution: "2480x3508 px"
        }
    },
    {
        id: 2,
        title: "Hanami-Festive",
        category: "Character Design",
        imageSrc: "/images/eventCollab.png",
        date: "20 Mei 2025",
        time: "18 - 23 Jam",
        descriptionDetails: "Fanart ini dibuat untuk event kolaborasi pada Hanami Festival. Event diselenggarakan pada sekitar awal Mei. Awalnya, saya memiliki karakter 'Aria' dari game 'Phantom Rose 2' karena saat itu saya sedang memainkan game tersebut. Pada gambar, saya kesulitan dalam proses shading, coloring, dan background. Kekurangan dari gambar ini yang paling terlihat jelas adalah bentuk matanya yang aneh. Seharusnya lebih dikecilkan dan diubah anglenya. Pemberian highlight tidak terlalu baik, sedikit kacau karena ada beberapa highlight. Untuk shading, ada bagian yang terkena multiple shading seperti di bagian leher.",
        additionalInfo: {
            software: "Clip Studio Paint",
            tablet: "Huion Kamvas 13",
            resolution: "2000x2000 px",
            event: "Phantom Rose 2 Community Collab"
        }
    },
    {
        id: 3,
        title: "Mi-Cat",
        category: "Character Design",
        imageSrc: "/images/HatsuneMikuYukikoNozawa.png",
        date: "19 Januari 2025",
        time: "8 - 11 Jam",
        descriptionDetails: "Illustrasi ini dibuat untuk mengerjakan tugas yaitu menggambar 'Hatsune Miku' dengan style dari mangaka 'Yukiko Nozawa' (mangaka yang membuat The 100 Girlfriends Who Really, Really, Really, Really, Really Love You). Awalnya, saya kesulitan pada pose karakter karena saya menggambar tanpa referensi pose. Saya hanya melihat art style Nozawa-sensei sebagai dasar. Pada gambar ini, terdapat beberapa kekurangan yaitu bayangan pada leher yang terlalu gelap, bayangan pada bawah tangan membuat jadi kurang logis secara visual, lineart berantakan, dan tidak ada shadow dan rendering pada bagian rok.",
        additionalInfo: {
            software: "Clip Studio Paint",
            tablet: "Huion Kamvas 13",
            resolution: "2480x3508 px",
            inspiration: "Yukiko Nozawa Art Style"
        }
    },
    {
        id: 4,
        title: "Slice & Slime",
        category: "Game",
        imageSrc: "/images/game1.jpeg",
        date: "8 September 2025",
        time: "25 - 30 Jam",
        descriptionDetails: "Game ini berjudul Slice & Slime. Awalnya, nama game adalah 'Wall Rune Xeroth' karena saya tidak terpikirkan nama di awal. Pembuatan game ini untuk UTS mata kuliah mobile programming saat itu. Di game ini, player harus bertahan selama yang mereka bisa. Slime (musuh) yang memiliki beberapa tipe akan mendekati pemain dan memberikan kerusakan. Semakin lama, musuh akan semakin kuat (damage multiplier dan hp multiplier)",
        additionalInfo: {
            engine: "Unity 2D",
            teamSize: "1 orang",
            platform: "Android",
        }
    }
];

function WorkDetailPage() {
    const params = useParams();
    const id = parseInt(params.id as string);

    const work = works.find(art => art.id === id);

    if (!work) {
        return (
            <Container className="my-5">
                <Row>
                    <Col className="text-center">
                        <h2>Karya tidak ditemukan</h2>
                        <p>Karya yang Anda cari tidak ditemukan atau telah dihapus.</p>
                        <Link href="/" passHref legacyBehavior>
                            <Button variant="primary">Kembali ke Home</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }

    const renderInfo = () => {
        if (work.category === 'Game') {
            return (
                <div className="mt-4 p-3 bg-light rounded">
                    <h6 className="fw-semibold">Informasi Game</h6>
                    <ul className="list-unstyled text-muted small mb-0">
                        <li>Engine: {work.additionalInfo.engine}</li>
                        <li>Tim: {work.additionalInfo.teamSize}</li>
                        <li>Platform: {work.additionalInfo.platform}</li>
                    </ul>
                </div>
            );
        }

        if (work.category === 'Character Design') {
            return (
                <div className="mt-4 p-3 bg-light rounded">
                    <h6 className="fw-semibold">Detail Teknis</h6>
                    <ul className="list-unstyled text-muted small mb-0">
                        <li>Software: {work.additionalInfo.software}</li>
                        <li>Tablet: {work.additionalInfo.tablet}</li>
                        {work.additionalInfo.resolution && (
                            <li>Resolusi: {work.additionalInfo.resolution}</li>
                        )}
                        {work.additionalInfo.event && (
                            <li>Event: {work.additionalInfo.event}</li>
                        )}
                        {work.additionalInfo.inspiration && (
                            <li>Inspirasi: {work.additionalInfo.inspiration}</li>
                        )}
                    </ul>
                </div>
            );
        }

        return null;
    };

    return (
        <Container className="my-5">
            <Row className="mb-2">
                <Col>
                    <Link href="/" passHref legacyBehavior>
                        <Button variant="outline-secondary" className="mb-3">
                            ~ Kembali ke Home
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <Link href="/work" passHref legacyBehavior>
                        <Button variant="outline-secondary" className="mb-3">
                            ~ Lihat Karya Lainnya
                        </Button>
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col lg={8} className="mb-4">
                    <Card className="shadow-sm border-0">
                        <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
                            <Image
                                src={work.imageSrc}
                                alt={work.title}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="card-img-top"
                            />
                        </div>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card className="shadow-sm border-0 h-100">
                        <Card.Body>
                            <div className="mb-3">
                                <Badge bg="secondary" className="mb-2">
                                    {work.category}
                                </Badge>
                                <h1 className="h3 fw-bold text-dark">{work.title}</h1>
                            </div>

                            <div className="mb-4">
                                <Row>
                                    <Col xs={6}>
                                        <small className="text-muted">Tanggal Pembuatan</small>
                                        <p className="fw-semibold mb-0">{work.date}</p>
                                    </Col>
                                    <Col xs={6}>
                                        <small className="text-muted">Waktu Pengerjaan</small>
                                        <p className="fw-semibold mb-0">{work.time}</p>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <h5 className="fw-semibold">Detail Proses</h5>
                                <p className="text-muted">{work.descriptionDetails}</p>
                            </div>

                            {renderInfo()}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default WorkDetailPage;