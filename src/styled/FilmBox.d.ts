import { StyledComponent } from 'styled-components';

declare module '../styled/FilmBox' {
  const StyledCard: StyledComponent<'div', any>; // Adjust the 'div' type if necessary
}