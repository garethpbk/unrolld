import styled from 'styled-components';

const Card = styled.div`
  height: 150px;

  background-color: #e8e8e8;

  box-shadow: 0 0px 1px ${props => props.theme.shadowColor};

  margin: 15px;
`;

export default Card;
