import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import SessionTime from './SessionTime';

import { Button, Card, Col, Modal } from 'react-bootstrap'

const FilmBox = ({Title, Poster}) => {

    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const storedPopupState = localStorage.getItem(`popupState-${Title}`);
        if (storedPopupState === 'open') {
          setShowPopup(true);
        } else if (location.hash === `#${Title}`) {
          setShowPopup(true);
        }
      }, [location, Title]);
    
      const handleShowPopup = () => {
        setShowPopup(true);
        localStorage.setItem(`popupState-${Title}`, 'open');
        navigate(`#${Title}`);
      };
    
      const handleClosePopup = () => {
        setShowPopup(false);
        localStorage.removeItem(`popupState-${Title}`);
        navigate('');
      };


  return (
          <Col key={Title} xs={12} md={6} lg={4} xxl={3}>
            <Card className="mb-3">
              <Card.Img
                className="poster"
                variant="top"
                src={Poster}
                alt={Title}
              />
              <Card.Body >
                <Card.Title>{Title}</Card.Title>
                <Button variant="primary" onClick={handleShowPopup}>
                  View More
                </Button>
              </Card.Body>
              <Modal show={showPopup} onHide={handleClosePopup}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-auto'>
                    <img className='card-img-top' src={Poster} alt={Title}></img>
                    <h3>{Title}</h3>
                    <SessionTime/>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
  )
}

export default FilmBox
