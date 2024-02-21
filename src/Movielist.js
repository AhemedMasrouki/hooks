import React from 'react'
import Moviecard from './Moviecard'

const Movielist = (props) => {
    console.log("movies:",props.movies)
  return (
    <div>
        {props.movies.map(movie=><Moviecard movie={movie}/>)}
    </div>
  )
}

export default Movielist