import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurants}) {
    console.log(restaurants);
  return (
    <>
    <Link to={`/view/${restaurants.id}`}>
    <Card className='cards'>
      <Card.Img variant="top" src={restaurants.photograph} />
      <Card.Body className='m-2'>
        <Card.Title className='text'>{restaurants.name}</Card.Title>
        <Card.Text className='text'>
          {restaurants.address}
          {restaurants.cuisine_type}
          {restaurants.neighborhood}
        </Card.Text>
      </Card.Body>
        </Card>
    </Link>
    </>
  )
}

export default RestCard