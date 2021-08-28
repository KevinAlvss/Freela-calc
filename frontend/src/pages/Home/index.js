import { useEffect} from "react";
import { useFetch } from "../../context";

import { Header } from "../../components/Header";
import { Project } from "../../components/Project";

import { Container, ProjectBox } from './styles';

function Home() {
 
  const { projects } = useFetch();
  const { fetchData } = useFetch();

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

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