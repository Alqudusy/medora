import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction: React.FC = () => {
    return (
        <section className="cta-section py-5" style={{ backgroundColor: '#2ca58d' }}>
            <Container className="text-center text-white">
                <h2>Ready to Take Control of Your Health?</h2>
                <p>Start your health journey today by checking your symptoms and finding nearby healthcare centers.</p>
                <div className="call-to-action-buttons">
                    {/* Primary CTA Button */}
                    <Link to="/signup">
                        <Button variant="light" size="lg" className="mr-3">
                            Get Started
                        </Button>
                    </Link>
                    {/* Secondary CTA Button */}
                    <Link to="/learn-more">
                        <Button variant="outline-light" size="lg">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default CallToAction;
