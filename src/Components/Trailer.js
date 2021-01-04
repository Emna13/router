import React from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap"

const Trailer = (props) => {
  console.log(props);
  return (
    <div className="trailer">
      <h1 className="title">Trailer</h1>
      {props.Movies.filter((el) => el.title === props.match.params.title).map(
        (el, index) => (
          <div key={index}>
            <h4>{el.discription}</h4>
            <iframe
              width="875"
              height="372"
              src={el.trailerLink}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )
      )}
      <Link to="/">
        <Button variant="secondary" style={{marginTop:'50px'}}>
          Back Home
        </Button>
      </Link>
    </div>
  );
};

export default Trailer;
