// import { Card } from 'react-bootstrap';
// import styled from 'styled-components';

// export const StyledCard = styled(Card)`
//     cursor: pointer;
// `;

import { Card } from 'react-bootstrap';
import styled from 'styled-components';

// Define a TypeScript interface for the StyledCardProps if needed
interface StyledCardProps {
  // Define any props you want to pass to the styled component
  // For example, you can add a custom cursor prop
  cursor?: string;
}

// Create the styled component
const StyledCard = styled(Card)<StyledCardProps>`
  cursor: ${(props) => props.cursor || 'pointer'};
`;

export default StyledCard;
