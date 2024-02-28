import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Description = (props) => {
  const navigate=useNavigate()
    const params=useParams()
    console.log("params:",params)
    let movie=props.movies.find(el=>el.title==params.name)
  return (
    <div>
        <h1>{movie.title}</h1>
        <h2>{movie.Description}</h2>
        {movie.trailer}
        {/*<Link to="/">Home</Link>*/}
    <button onClick={()=>{navigate('/')}}></button>
    </div>
  )
}

export default Description