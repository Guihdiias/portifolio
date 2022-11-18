import styled from 'styled-components';

export const Row = styled.div` 
  display: flex;
  justfy-content: center;
  @media screen and (max-width: 500px){
    margin-bottom: 100px;
    justify-content: center;
    flex-direction: column;
    }
`;

export default Row;
