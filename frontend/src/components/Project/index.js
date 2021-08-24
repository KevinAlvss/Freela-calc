import React from 'react';
import { useFetch } from '../../context';

import { Container, NameDiv, StatisitcsDiv, ActionsDiv } from './styles';

import Api from '../../service/connection';
const api = new Api();

export function Project({projeto, numero}) {

  const { change, setChange } = useFetch()

    function switchStatus(){
      setChange(!change);
      return api.switchStatus(projeto);
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
                    <h2>R$ {projeto.horasPordia}</h2>
                </div>

            </StatisitcsDiv>

          </div>

          <ActionsDiv>
 
            {projeto.encerrado === true ?
                 
            <button onClick={switchStatus} className="status encerrado" >Encerrado</button>

            :
            
            <button onClick={switchStatus} className="status andamento" >Em andamento</button>

            }
          </ActionsDiv>

      </Container>
  );
}