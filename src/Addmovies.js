import React, { useRef, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Addmovies = (props) => {
    const[rate,setRate]=useState(0)
    const title=useRef()
    const discription=useRef()
    const posterURL=useRef()
  return (
    <div>
        <input type='text' placeholder='type you movie title'ref={title}></input>
        <input type='text' placeholder='type you movie description'ref={discription}></input>
        <input type='text' placeholder='type you movie posterURL'ref={posterURL}></input>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rate}
          onStarClick={(value)=>{setRate(value)}}
        />

        <button onClick={()=>{
        props.setMovies([...props.movies,{
            title:title.current.value,
            discription:discription.current.value,
            posterURL:posterURL.current.value,
            rating:rate
        }])    
        }}> New Movie</button>
    </div>
  )
}

export default Addmovies