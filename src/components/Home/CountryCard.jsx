
import React from 'react';
import { Card } from 'react-bootstrap';

const CountryCard = ({ country }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={country.flag} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>
        <Card.Text>Region: {country.region}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
