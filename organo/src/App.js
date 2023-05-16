import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";

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
    </div>
  );
}

export default App;
