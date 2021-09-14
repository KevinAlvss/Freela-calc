import React from 'react';
import { useFetch } from '../../context';

import { BsPencil, BsTrash } from 'react-icons/bs'

import { Container, NameDiv, StatisitcsDiv, ActionsDiv, IconsDiv, VerbButton } from './styles';

export function Project({projeto, numero}) {

  const { setIsOpen } = useFetch()
  const { switchStatus } = useFetch()
  
  function passToContextToSwitchStatus(){
    switchStatus(projeto)
  }

  const projectPrice = projeto.diasParaEntrega * projeto.horasPorDia * 100

  return(
    <>
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
                  <h2>R$ {projectPrice}</h2>
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

        <IconsDiv>
          <VerbButton onClick={() => setIsOpen(true)}>
            <BsPencil size={20} />
          </VerbButton>
          <VerbButton>
            <BsTrash  size={20} />
          </VerbButton>
        </IconsDiv>

    </Container>
    </>
  );
}