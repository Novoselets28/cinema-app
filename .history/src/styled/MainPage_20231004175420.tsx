import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { fontSize } from './global';

export const StyledContainer = styled(Container)`
    max-width: 100%;
    text-align: center;
    height: 500px;
    font-size: ${fontSize.large};
    line-height: 18px
`;

export const StyledRow = styled(Row)`
    display: flex;
    justify-content: center;
`;