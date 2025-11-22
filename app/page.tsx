'use client';

// Components
import Navbar from "../components/navbar";
import Hero from "../components/herosection";
import WorkSection from "../components/worksection"; // Pastikan nama file dan export sesuai
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

      {/* About Section */}
      <Container className="my-5 py-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h6 className="text-primary fw-bold text-uppercase">About Me</h6>
            <h2 className="display-6 fw-bold mb-3">Bringing Imagination to Life</h2>
            <p className="text-muted lead">
              Hi, I'm an illustrator specializing in anime-style character design and fantasy backgrounds. 
              I have been drawing since... (ceritakan sedikit tentangmu).
            </p>
            <p className="text-muted">
              I use tools like Clip Studio Paint and Photoshop to create high-quality assets for games, novels, and personal commissions.
            </p>
            <Button variant="primary" className="mt-3 px-4 py-2 rounded-pill">Read More About Me</Button>
          </Col>

          <Col md={6} className="text-center">
            <div className="position-relative">
                <Image 
                    src="/images/about.png" 
                    alt="Artist Avatar" 
                    width={400} 
                    height={400}
                    className="img-fluid rounded-circle shadow-lg"
                    style={{objectFit: "cover"}}
                />
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