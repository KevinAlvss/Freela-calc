import React from 'react';

import { Container, Statistics, AddProject, Plus, Button } from './styles';

export function Header() {


  return(
      <Container>
          <Statistics>
              <div>
                  <h2>12</h2> 
                  Projetos ao total
              </div>

              <div>
                  <h2>5</h2>
                  Em andamento
              </div>

              <div>
                  <h2>7</h2>
                  Encerrados
              </div>
          </Statistics>

          <AddProject>
              <Plus>
                  +
              </Plus>
              <Button>
                Adicionar novo projeto
              </Button>
          </AddProject>
      </Container>
  );
}
