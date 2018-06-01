import styled from 'styled-components';

export const ContainedButton = styled.button`
  height: auto;
  width: auto;

  background-color: ${props => props.theme.darkPrimaryColor};

  color: white;
  font-weight: 600;
  font-size: 1em;

  border-radius: 5px;
  border: 0;
  margin: 0 0 15px 0;
  padding: 10px 20px;

  box-shadow: 0 0 1px ${props => props.theme.shadowColor};
`;
