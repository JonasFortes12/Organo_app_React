import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Banner from "./components/Banner";
import Forms from "./components/Forms";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {

  const onFavoriteChange = (id) => {
    setCollaborators(collaborators.map(collaborator => {
      if (collaborator.id === id) {
        collaborator.favorite = !collaborator.favorite
        return collaborator;
      }
      return collaborator;
    }))
  }

  const onRegisterCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const onRegisterNewTeam = (newTeam) => {
    setTeams([...teams, { id: uuidv4(), ...newTeam }]);
    console.log();
  }

  const onDeleteCollaborator = (collaboratorId) => {

    const removedCollaborators = collaborators.filter(
      collaborator => collaborator.id !== collaboratorId
    )
    setCollaborators([...removedCollaborators])

  };

  const onChangeTeamsColor = (value, id) => {
    const teamsChanged = teams.map(team => {
      if (team.id === id) {
        team.color = value
      }
      return team
    })
    setTeams(teamsChanged)
  }

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'Ux e Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    }
  ])

  const [collaborators, setCollaborators] = useState([
    {
      id: uuidv4(),
      favorite: false,
      name: 'Jonas Fortes',
      role: 'Desenvolvedor de Softwares Embarcados',
      imageLink: 'https://github.com/JonasFortes12.png',
      team: 'Front-End'
    },

    {
      id: uuidv4(),
      favorite: false,
      name: 'Lucas Rafael',
      role: 'Desenvolvedor Junior',
      imageLink: 'https://github.com/luiz.png',
      team: 'Programação'
    }
  ]);

  return (
    <div className="App">
      <Banner />
      <Forms
        itens={teams.map(team => team.name)}
        onRegisterCollaborator={onRegisterCollaborator}
        onRegisterNewTeam={onRegisterNewTeam}
      />
      {
        teams.map((team, index) => {
          return (
            <Team
              key={index}
              teamName={team.name}
              teamId={team.id}
              color={team.color}
              collaborators={collaborators.filter(
                collaborator => collaborator.team === team.name
              )}
              onDeleteCard={onDeleteCollaborator}
              onChangeTeamsColor={onChangeTeamsColor}
              onFavoriteChange={onFavoriteChange}
            ></Team>
          )
        })
      }
      <Footer></Footer>

    </div>
  );
}

export default App;
