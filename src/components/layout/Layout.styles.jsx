import styled from 'styled-components';

import bgImage from '../../images/backGround-optimized.jpg';

export const LayoutPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  background-image: url(${bgImage});
  background-size: cover;
`;
