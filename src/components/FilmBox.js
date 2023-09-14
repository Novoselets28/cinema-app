import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import SessionTime from './SessionTime';
import { useNavigate } from 'react-router';

const FilmBox = ({Title, Poster}) => {

    const [showPopup, setShowPopup] = useState(false);

    const navigate = useNavigate(); // Initialize history from React Router


    const handleShowPopup = () => {
        setShowPopup(true);
        navigate('/popup')
    }
    const handleClosePopup = () => setShowPopup(false)



  return (
        <Row >
          <Col key={Title} xs={12} md={6} lg={4} xxl={3}>
            <Card className="mb-3">
              <Card.Img
                className="poster"
                variant="top"
                src={Poster}
                alt={Title}
              />
              <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Button variant="primary" onClick={handleShowPopup}>
                  View More
                </Button>
              </Card.Body>
              <Modal show={showPopup} onHide={handleClosePopup}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='card-img-top' src={Poster} alt={Title}></img>
                    <h3>{Title}</h3>
                    <SessionTime/>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
        </Row>
  )
}

export default FilmBox
