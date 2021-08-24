import { useEffect, useState } from "react";
import { useFetch } from "../../context";

import { Header } from "../../components/Header";
import { Project } from "../../components/Project";

import { Container, ProjectBox } from './styles';

import Api from "../../service/connection";
const api = new Api();

function Home() {
 
  const { change } = useFetch();
  const [projects, setProjects] = useState([]) 

  useEffect(() => {

    async function fetchData(){
      const resp = await api.listProjects();
      setProjects(resp)
    }

    fetchData()
  }, [change])

  return (
    <Container>
      <Header projects = {projects} />

      <ProjectBox>
          {projects.map(x => 
            <Project
              key = {x._id}
              numero = {projects.indexOf(x) + 1} 
              projeto = {x}
            />
          )}          
      </ProjectBox>
    </Container>  
  );
}

export default Home;