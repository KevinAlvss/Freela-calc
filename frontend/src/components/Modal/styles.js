import styled from 'styled-components';

export const Container = styled.div`
  width: 50vw;
  height: 50vh;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: tomato;
  z-index: 10000;
`;
