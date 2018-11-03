import styled from 'styled-components';

const CloseButton = styled.button`
  background: ${props => props.theme.brand1};
  color: ${props => props.theme.white};
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
`;

export default CloseButton;
