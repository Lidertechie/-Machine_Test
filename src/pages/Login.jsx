import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/Auth/LoginForm';
import loginImage from '../assets/illustration.png';
import './Login.css';

const Login = () => {
  return (
    <div className="login-wrapper">
      <Container fluid className="login-container">
        <Row className="h-100 g-0">
          {/* Left Column: Login Form */}
          <Col xs={12} md={6} className="form-column">
            <LoginForm />
          </Col>

          {/* Right Column: Illustration Image */}
          <Col md={6} className="image-column">
            <img
              src={loginImage}
              alt="Illustration"
              className="illustration-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
