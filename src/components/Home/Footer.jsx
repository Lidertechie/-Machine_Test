import React from "react";
import {  Row, Col } from "react-bootstrap";
import GoogleIcon from "../../assets/icon/google.svg";
import FacebookIcon from "../../assets/icon/facebook.svg";
import LinkedinIcon from "../../assets/icon/linkedin.svg";
import TwitterIcon from "../../assets/icon/twitter.svg";
import "./Style/Footer.css"

const Footer = () => (
  <div className="footer  py-4">
    <Row className="justify-content-center">
      <Col xs="auto">
        <div className="social-icons">
          <div className="icon-circle">
            <img src={GoogleIcon} alt="Google" />
          </div>
          <div className="icon-circle">
            <img src={FacebookIcon} alt="Facebook" />
          </div>
          <div className="icon-circle">
            <img src={LinkedinIcon} alt="LinkedIn" />
          </div>
          <div className="icon-circle">
            <img src={TwitterIcon} alt="Twitter" />
          </div>
        </div>
      </Col>
    </Row>
    <Row className="justify-content-center mt-3">
      <Col xs="auto">
        <div className="footer-email">timesworld@timesworld.com </div>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col xs="auto">
        <div className="footer-copy">
          Copyright &copy; 2025 Timesworld. All rights reserved.
        </div>
      </Col>
    </Row>
  </div>
);

export default Footer;
