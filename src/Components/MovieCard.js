import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import MovieList from "./movieList";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  Table,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Filter from "./AddMovie";

const MovieCard = ({ Movies }) => {
  const [Search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const Look = () => {
    Search !== "" ? setSearch(Search) : alert("Enter a movie name !");
  };

  const [star, setStar] = useState(0)
  const ratingChanged = (newRating) => {
    setStar(newRating);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="nav">
        <Navbar.Brand href="#home">MoviApp</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Enter a movie name"
            onChange={handleChange}
            value={Search}
            className="mr-sm-2"
          />
          <Button variant="outline-info" onClick={Look}>
            Search by Name
          </Button>
        </Form>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          value={Movies.rate}
        />
        
      </Navbar>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Rate</th>
            <th>Movie Title</th>
            <th>Description</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {Movies.filter((item) =>
            item.title.toUpperCase().includes(Search.toUpperCase())
          ).filter(el=>el.rate>=star).map((item, index) => (
            <MovieList
              item={item}
              key={index}
              Search={Search}
              handleChange={handleChange}
              Look={Look}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieCard;
