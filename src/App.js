import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Movielist from "./Movielist"
import 'bootstrap/dist/css/bootstrap.min.css';
import Addmovies from './Addmovies';
import Filter from './Filter';
import { Route, Router, Routes } from 'react-router-dom';
import Description from './Description';


function App() {
  const [SearchRate,setSearchRate]=useState(0)
  const [titleSearch,setTitlesearch]=useState("")
  const [movies,setMovies]=useState([{
    title:"london has fallen",
    discription:"London Has Fallen is an explosive, high-adrenaline action film. During a state funeral for the British Prime Minister",
    rating:9,
    posterURL:"https://musicart.xboxlive.com/7/42862900-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/3AsOdX7NcJs?si=c8IXb_HFS-Pr31Fi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  {
  title:"white house down",
  discription:"Summaries. While on a tour of the White House with his young daughter, a Capitol policeman springs into action to save his child and protect the president from a heavily armed group of paramilitary invaders",
  rating:4,
  posterURL:"https://www.indiependent.co.uk/wp-content/uploads/2015/07/pic_1980191.jpg",
  trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/WfaTlmYvTA8?si=s3-Ac6l0DgkRKJn3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
},
])
  return (
    <div className="App">
      <Routes>

   <Route
     path=""
      element={
 <>
<Filter
 SearchRate={SearchRate}
  setSearchRate={setSearchRate}
   title={setTitlesearch}/>
      <Movielist movies={movies.filter(
        (movie)=>
        movie.title.
        includes(titleSearch)&&
         movie.rating>=SearchRate)}/>
      <Addmovies setMovies={setMovies} movies={movies}/>
 </>

   }
   />
   <Route path="/movies/:name" element={<Description movies={movies}/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
