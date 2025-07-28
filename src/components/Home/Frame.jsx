import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const FrameBox = () => {
  return (
    <Card className="h-100">
      <Row>
        <Col xs={12}>
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
