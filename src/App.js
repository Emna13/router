import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import reactStars from "react-rating-stars-component";
import AddMovie from "./Components/AddMovie";
import MovieCard from "./Components/MovieCard";
import { BrowserRouter, Route } from "react-router-dom";
import Trailer from "./Components/Trailer";

function App(props) {
  const [Movies, setMovies] = useState([
    {
      title: "Gone Girl",
      description: "2014 ‧ Thriller/Film à énigme",
      posterURL:
        "https://fr.web.img5.acsta.net/pictures/14/09/11/17/05/508784.jpg",
      rate: "4",
      trailerLink:"https://www.youtube.com/embed/Ym3LB0lOJ0o",
    },
    {
      title: "The Fault in Our Stars",
      description: "2014 ‧ Romance/Drame",
      posterURL:
        "https://fr.web.img6.acsta.net/pictures/14/06/18/17/18/218720.jpg",
      rate: "5",
      trailerLink:'https://www.youtube.com/embed/9ItBvH5J6ss',
    },
    {
      title: "Passengers",
      description: "2016 ‧ SF/Romance ",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZjk4ZTMwMTYtOTk1NC00OTA0LWFhMGYtZTBjMzViMDY2YWZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rate: "3",
      trailerLink:'https://www.youtube.com/embed/7BWWWQzTpNU'
    },
  ]);

  const Add = (title, description, posterURL, rate, trailerLink) => {
    setMovies([
      ...Movies,
      {
        title: title,
        description: description,
        posterURL: posterURL,
        rate: rate,
        trailerLink: trailerLink
      },
    ]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' render={(props)=> <MovieCard Movies={Movies} {...props}/>}  />
        <Route exact path='/' render={(props)=><AddMovie Add={Add} {...props}/>}/>
        <Route path='/trailer/:title' render={(props)=><Trailer Movies={Movies} {...props}/>}/>
        {console.log(props)}
      </BrowserRouter>
    </div>
  );
}

export default App;
