import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";
import Team from "./components/Team";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const onRegisterCollaborator = (collaborator) => {

    console.log(collaborator)
    
    setCollaborators([...collaborators, collaborator]);
    
    console.log(collaborators); 
  };

  return (
    <div className="App">
      <Banner />
      <Forms onRegisterCollaborator={onRegisterCollaborator} />
      <Team teamName='Programação'></Team>
      <Team teamName='Front-End'></Team>
      <Team teamName='Data Science'></Team>
    </div>
  );
}

export default App;
