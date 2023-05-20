import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";
import Team from "./components/Team";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const onRegisterCollaborator = (collaborator) => {
    
    setCollaborators([...collaborators, collaborator]);
    
  };

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Ux e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }

  ]

  return (
    <div className="App">
      <Banner />
      <Forms itens={teams.map(team => team.name)} onRegisterCollaborator={onRegisterCollaborator} />
      {
        teams.map(team =>{
          return(
            <Team 
            key={team.name} 
            teamName={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
            ></Team>
          )
        })
      }


    </div>
  );
}

export default App;
