'use client';

// Components
import Navbar from "../components/navbar";
import Hero from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

// Bootstrap & React
import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <main className="bg-light">
      <Navbar />
      <Hero />

      <Container className="my-5 py-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h6 className="text-primary fw-bold text-uppercase">Tentang Saya</h6>
            <h2 className="display-6 fw-bold mb-3 text-dark">Jansen Vanesco</h2>
            <p className="text-muted lead">
              Halo, saya Jansen Vanesco. Saya adalah seorang illustrator dan game developer. Saya berfokus untuk membuat desain karakter orisinal.
            </p>
            <p className="text-muted">
              Saya menggunakan anime untuk art style saya. Aplikasi yang saya gunakan untuk menggambar adalah Clip Studio Paint. Aplikasi yang saya gunakan untuk membuat game adalah Unity 2D
            </p>
          </Col>

          <Col md={6} className="text-center">
            <div className="position-relative d-inline-block">
                <div style={{
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'inline-block'
                }}>
                  <Image 
                    src="/images/try1.png" 
                    alt="Artist Avatar" 
                    width={400}
                    height={400}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
            </div>
          </Col>
        </Row>
      </Container>

      <section id="works" className="bg-white py-4">
          <WorkSection />
      </section>
      <section id="services">
          <ServiceSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}
