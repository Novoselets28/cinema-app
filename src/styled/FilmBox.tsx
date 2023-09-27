import { Card } from 'react-bootstrap';
import styled from 'styled-components';

interface StyledCardProps {
  cursor?: string;
}

const StyledCard = styled(Card)<StyledCardProps>`
  cursor: ${(props) => props.cursor || 'pointer'};
`;

export default StyledCard;
