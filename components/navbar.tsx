'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

function CustomNavbar(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#home">Jansen Vanesco</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav 
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">Tentang Saya</Nav.Link>
                        <Nav.Link href="#works">Portfolio Terbaru</Nav.Link>
                        <Nav.Link href="#services">Layanan</Nav.Link>
                        <Nav.Link href="#contact">Kontak</Nav.Link>
                        <Nav.Link href="/work">Semua Portfolio</Nav.Link>
                    </Nav>
                    
                    <Nav>
                        <Link href="/terms" className="nav-link">
                            Terms
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;