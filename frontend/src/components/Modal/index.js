import React from 'react';
import { useFetch } from '../../context';

import { Container } from './styles';

export function Modal() {
  const {setIsOpen} = useFetch()

  return (
    <Container onClick={() => setIsOpen(false)}>

    </Container>
  );
}