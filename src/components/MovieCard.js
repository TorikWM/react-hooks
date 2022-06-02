import React from 'react'
import { Card , Button } from 'react-bootstrap';



export default function MovieCard ( {movie} ) {
  return (
    <div>
        <Card style={{ width: '18rem' , height:'800px' , backgroundColor : '#C4DDFF' }}>
  <Card.Img variant="top" src={movie.posterUrl} style = {{ height:'500px'}} />
  <Card.Body>
    <Card.Title> {movie.title} </Card.Title>
    <Card.Text>
      {movie.description}.
    </Card.Text>
    <Button variant="primary">watch the Movie</Button>
  </Card.Body>
</Card>
    </div>
  )
}
