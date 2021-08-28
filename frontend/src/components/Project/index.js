import React from 'react';
import { useFetch } from '../../context';

import { Container, NameDiv, StatisitcsDiv, ActionsDiv } from './styles';

export function Project({projeto, numero}) {

  const { switchStatus } = useFetch()
  
  function passToContextToSwitchStatus(){
    switchStatus(projeto)
  }

  return(
    <Container>
        <div id="left">
          <NameDiv>
          <p>{numero}</p>
          <h1>{projeto.nome}</h1>
          </NameDiv>
          
          <StatisitcsDiv>
              
              <div className="statisitcsChildren">
                  <p>Prazo</p>
                  <h2>{projeto.diasParaEntrega} dias para entrega</h2>
              </div>
              
              <div className="statisitcsChildren">
                  <p>Valor</p>
                  <h2>R$ {projeto.horasPorDia}</h2>
              </div>

          </StatisitcsDiv>

        </div>

        <ActionsDiv>

          {projeto.encerrado === true ?
          <button onClick={passToContextToSwitchStatus} className="status encerrado" >Encerrado</button>
          :
          <button onClick={passToContextToSwitchStatus} className="status andamento" >Em andamento</button>
          }

        </ActionsDiv>

    </Container>
  );
}