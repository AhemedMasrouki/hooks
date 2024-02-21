import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Filter = (props) => {
  return (
    <div >
      <input type='text' placeholder='Search by title' onChange={(event)=>props.title(event.target.value)}></input>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={props.SearchRate}
          onStarClick={(value)=>{props.setSearchRate(value)}}
        />  
    </div>
  )
}

export default Filter