import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const onRegisterCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
    
  };

  const onDeleteCollaborator = (collaborator) => {

    console.log("Colaborador deletado!");

  };

  const onChangeTeamsColor = (value, teamName) =>{
    const teamsChanged = teams.map(team=>{
      if(team.name === teamName ){
        team.color = value
      }
      return team
    })
    setTeams(teamsChanged)
  }

  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      color: '#57C278'
    },
    {
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      name: 'Devops',
      color: '#E06B69'
    },
    {
      name: 'Ux e Design',
      color: '#DB6EBF'
    },
    {
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    }
  ])
 
  return (
    <div className="App">
      <Banner />
      <Forms itens={teams.map(team => team.name)} onRegisterCollaborator={onRegisterCollaborator} />
      {
        teams.map((team, index) =>{
          return(
            <Team 
            key={index} 
            teamName={team.name}
            color={team.color}
            collaborators={collaborators.filter(
                collaborator => collaborator.team === team.name
            )}
            onDeleteCard={onDeleteCollaborator}
            onChangeTeamsColor={onChangeTeamsColor}
            ></Team>
          )
        })
      }
      <Footer></Footer>

    </div>
  );
}

export default App;
