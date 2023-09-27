import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Button, Card, Col, Modal } from 'react-bootstrap'

import SessionTime from './SessionTime';
import StyledCard from '../styled/FilmBox';


interface FilmBoxProps {
  Title: string;
  Poster: string;
}

const FilmBox: React.FC<FilmBoxProps> = ({Title, Poster}) => {

  const [showPopup, setShowPopup] = useState<boolean>(false);
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

      const handlePosterClick = () => {
        navigate(`/${Title}`);
      };

  return (
          <Col key={Title} xs={12} md={6} lg={4} xxl={3}>
            <StyledCard>
              <Card.Img
                className="poster"
                variant="top"
                src={Poster}
                alt={Title}
                onClick={handlePosterClick}
              />
              <Card.Body >
                <Card.Title>{Title}</Card.Title>
                <Button variant="primary" onClick={handleShowPopup}>
                  View More
                </Button>
              </Card.Body>
              <Modal show={showPopup} onHide={handleClosePopup}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='mx-auto'>
                    <img className='card-img-top' src={Poster} alt={Title}></img>
                    <h3>{Title}</h3>
                    <SessionTime date={''}/>
                </Modal.Body>
              </Modal>
            </StyledCard>
          </Col>
  )
}

export default FilmBox
