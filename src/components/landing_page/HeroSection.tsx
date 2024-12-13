import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HeroImage from './assets/heroImage.jpg'; // Replace with your image
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section bg-light py-5">
            <Container>
                <Row className="align-items-center">
                    {/* Left Side - Text */}
                    <Col md={6} className="text-center text-md-start">
                        <h1 className="display-4 fw-bold text-primary">
                            Your Health, <span className="text-success">Simplified</span>
                        </h1>
                        <p className="lead text-secondary">
                            Medora is your AI-powered health symptom checker and local healthcare navigator.
                            Get personalized insights and find nearby healthcare services effortlessly.
                        </p>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                            <Button href="#signup" variant="success" size="lg">
                                Get Started
                            </Button>
                            <Button href="#learn-more" variant="outline-primary" size="lg">
                                Learn More
                            </Button>
                        </div>
                    </Col>

                    {/* Right Side - Image */}
                    <Col md={6} className="text-center">
                        <img
                            src={HeroImage}
                            alt="Healthcare illustration"
                            className="img-fluid"
                            style={{ maxHeight: '400px' }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
