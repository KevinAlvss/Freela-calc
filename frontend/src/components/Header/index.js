import React, { useEffect, useState } from 'react';

import { Container, Statistics, AddProject, Plus, Button } from './styles';

export function Header({projects}) {
  
  const [andamento, setAndamento] = useState(0);  
  const [encerrado, setEncerrado] = useState(0);  

  useEffect(()=>{
      function sumStatistics(){
        projects.forEach(function(x){
            //calcula os encerrados e em andamentos

        })
      }

    sumStatistics()
    // eslint-disable-next-line
  },[projects])

  return(
      <Container>
          <Statistics>
              <div>
                  <h2>{projects.length}</h2> 
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
