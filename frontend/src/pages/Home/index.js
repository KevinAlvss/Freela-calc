import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Project } from "../../components/Project";

import { Container, ProjectBox } from './styles';

import Api from "../../service/connection";
const api = new Api();

function Home() {
 
  const [projects, setProjects] = useState([])  

  useEffect(() => {
    const resp = api.listProjects();

    resp.then((a) => {
        setProjects(a);
    });

  }, [])

  return (
    <Container>
      <Header />

      <ProjectBox>
          {projects.map(x => 
            <Project 
              nome = {x.nome}
              diasParaEntrega = {x.diasParaEntrega}
              horasPordia = {x.horasPordia}
            />
          )}          
      </ProjectBox>
    </Container>  
  );
}

export default Home;