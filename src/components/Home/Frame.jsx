import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import './Style/FrameBox.css';
import FrameImg from '../../assets/frame.png';

const FrameBox = () => {
  return (
    <Card className="frame-box h-100">
      <Row>
        <Col xs={12} md={4} className="mb-3 mb-md-0 d-flex align-items-center justify-content-center">
          <Image src={FrameImg} alt="Frame" fluid rounded />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body>
            <Card.Title>Content Section</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
            </Card.Text>
            <ul className="mt-3 ps-3">
              <li>Duis aute irure dolor in reprehenderit</li>
              <li>Voluptate velit esse cillum dolore</li>
              <li>Eu fugiat nulla pariatur</li>
            </ul>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default FrameBox;
