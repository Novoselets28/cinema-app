import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { colors, fontSize } from './global';

export const CinemaScreen = styled.div`
  background-color: ${colors.secondary};
  text-align: center;
  font-size: ${fontSize.medium};
  padding: 10px;
  margin-bottom: 20px;
`;

export const HomeButton = styled(Button)`
  margin: 5px;
`;

export const StyledContainer = styled.div`
  margin-top: 5px;
`;

export const Container = styled.div`
  // Your styles here
`;


