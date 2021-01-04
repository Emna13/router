import React, { useState } from "react";
import MovieList from "./movieList";
import { Modal, Button, Form } from "react-bootstrap";

const AddMovie = ({ Add }) => {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [trailerLink, setTrailerLink] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='new'>
            <Button variant="primary" onClick={handleShow}>
              Add a new Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Rate</Form.Label>
              <Form.Control as="select" onChange={(e)=>setRate(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control placeholder="Movie Name"  onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Group><Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Description"  onChange={(e)=>setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control placeholder="URL"  onChange={(e)=>setPosterURL(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Trailer Link</Form.Label>
              <Form.Control placeholder="Link"  onChange={(e)=>setTrailerLink(e.target.value)}/>
            </Form.Group>
          </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => {Add(title, description, posterURL, rate,trailerLink); setShow(false)}}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
  );
};

export default AddMovie;
