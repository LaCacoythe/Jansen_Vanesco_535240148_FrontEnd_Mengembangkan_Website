"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
    position?: string; 
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Selamat Datang di Website Saya!",
            subtitle: "Jansen Vanesco - Digital Illustrator & Game Developer",
            imageUrl: "/images/tesColoring1.png",
        },
        {
            title: "Illustrator",
            subtitle: "Pengalaman menggambar 5 tahun",
            imageUrl: "/images/try1.png",
            position: "center 20%" 
        },
        {
            title: "Game Developer",
            subtitle: "Game design unik dan kreatif",
            imageUrl: "/images/game1.jpeg"
        },
    ]

    return (
        <Carousel fade interval={4000} data-bs-theme="dark">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div style={{ 
                        position: 'absolute', 
                        top: 0, left: 0, right: 0, bottom: 0, 
                        backgroundColor: 'rgba(0,0,0,0.4)', 
                        zIndex: 1 
                    }}></div>

                    <div
                        style={{
                            backgroundImage: `url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: slide.position ? slide.position : "center",
                            height: "80vh", 
                            position: 'relative'
                        }}
                    >
                    </div>
                    <Carousel.Caption style={{ zIndex: 2 }}>
                        <h1 className='display-3 fw-bold text-white'>{slide.title}</h1>
                        <p className='lead text-white'>{slide.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default HeroSection;