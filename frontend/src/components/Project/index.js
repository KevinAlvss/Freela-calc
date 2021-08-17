import React from 'react';

import { Container, NameDiv, StatisitcsDiv, ActionsDiv } from './styles';

export function Project({nome, diasParaEntrega, horasPordia}) {
  return(
      <Container>
          <div id="left">
            <NameDiv>
            <h1>{nome}</h1>
            </NameDiv>
            
            <StatisitcsDiv>
                
                <div className="statisitcsChildren">
                    <p>Prazo</p>
                    <h2>{diasParaEntrega} dias para entrega</h2>
                </div>
                
                <div className="statisitcsChildren">
                    <p>Valor</p>
                    <h2>R$ {horasPordia}</h2>
                </div>

            </StatisitcsDiv>

          </div>

          <ActionsDiv>
              b 
              a
          </ActionsDiv>

      </Container>
  );
}