import { Button, Form, FormControl } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import React from "react";

export default function Search({getTitle , getRate}) {

  const ratingChanged = (newRating) => {
    getRate(newRating);
  };
  
  return (
    <div>
      <div style={{ marginLeft:'700px' }} >
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    
  />,
  </div>
    <div style={{ margin:"auto" , width :'500px' }}>
        <Form style={{display:'flex' ,}} >
            <FormControl type = 'text' style={{ margin:'0px 10px' }} placeholder =' search a movie' onChange={e=>getTitle(e.target.value)} />
            <Button>Search</Button>
        </Form>
    </div>
    </div>
  )
}
