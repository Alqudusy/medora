import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer style={{ color: '#ffffff', padding: '20px 0' }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5 style={{ color: '#ffffff' }}>Medora</h5>
                        <p>Empowering you to take control of your health with AI-driven symptom checking and local healthcare navigation.</p>
                    </Col>
                    <Col md={4}>
                        <h5 style={{ color: '#ffffff' }}>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/privacy-policy" style={{ color: '#ffffff' }}>Privacy Policy</a></li>
                            <li><a href="/terms-of-service" style={{ color: '#ffffff' }}>Terms of Service</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 style={{ color: '#ffffff' }}>Follow Us</h5>
                        <div>
                            <FaFacebook size={30} style={{ marginRight: '10px', color: '#ffffff' }} />
                            <FaTwitter size={30} style={{ marginRight: '10px', color: '#ffffff' }} />
                            <FaInstagram size={30} style={{ color: '#ffffff' }} />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mt-4">
                    <Col>
                        <p>&copy; {new Date().getFullYear()} Medora. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
