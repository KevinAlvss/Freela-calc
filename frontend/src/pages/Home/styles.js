import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  filter: blur(${props => props.isOpen ? "3px" : 0 });
`;

export const ProjectBox = styled.div`
  position: relative;
  
  display: flex;
  flex-direction: column;
  gap: 8px 0;

  padding: 0 10%;

  top: -50px;
`;