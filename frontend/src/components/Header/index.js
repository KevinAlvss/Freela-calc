import React, { useEffect, useState } from 'react';

import { Container, Statistics, AddProject, Plus, Button } from './styles';

export function Header({projects}) {
  
  const [andamento, setAndamento] = useState(0);  
  const [encerrado, setEncerrado] = useState(0); 
  const [total, setTotal]         = useState(0);  

  useEffect(()=>{
      function sumStatistics(){
        setTotal(projects.length)
        setEncerrado(projects.reduce((a, b) => a + b.encerrado, 0)) 
        setAndamento(projects.reduce((a, b) => a + !b.encerrado, 0))
      }

    sumStatistics()
    // eslint-disable-next-line
  },[projects])

  return(
      <Container>
          <Statistics>
              <div>
                  <h2>{total}</h2> 
                  Projetos ao total
              </div>

              <div>
                  <h2>{andamento}</h2>
                  Em andamento
              </div>

              <div>
                  <h2>{encerrado}</h2>
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
