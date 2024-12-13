import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaHeartbeat, FaMapMarkerAlt, FaRobot } from 'react-icons/fa'; // Example Icons
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section py-5">
            <Container>
                <h2 className="text-center text-primary mb-5">How Medora Helps You</h2>
                <Row>
                    {/* Feature 1 */}
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <FaHeartbeat size={50} color="#2ca58d" />
                                <Card.Title className="mt-3">Symptom Checker</Card.Title>
                                <Card.Text>
                                    Get quick and accurate insights based on your symptoms with AI-powered technology.
                                </Card.Text>
                                <Button variant="outline-primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Feature 2 */}
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <FaMapMarkerAlt size={50} color="#2ca58d" />
                                <Card.Title className="mt-3">Find Healthcare Centers</Card.Title>
                                <Card.Text>
                                    Locate nearby healthcare centers and clinics with ease.
                                </Card.Text>
                                <Button variant="outline-primary">Find Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Feature 3 */}
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <FaRobot size={50} color="#2ca58d" />
                                <Card.Title className="mt-3">AI Insights</Card.Title>
                                <Card.Text>
                                    Receive personalized health advice and recommendations based on your symptoms and history.
                                </Card.Text>
                                <Button variant="outline-primary">See Insights</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FeaturesSection;
