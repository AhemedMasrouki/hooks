import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component'; 
const Moviecard = (props) => {
  return (
    <div>
      <Link  to={`/movies/${props.movie.title}`}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.movie.posterURL} />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>
          {props.movie.discription}
        </Card.Text>
        
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={props.movie.rating}
        />
        
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default Moviecard