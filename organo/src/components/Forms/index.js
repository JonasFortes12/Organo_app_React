import "./Forms.css";
import TextFild from "../TextFild";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";

const Forms = (props) => {
  
  const formSave = (event) => {
    event.preventDefault();
    props.onRegisterCollaborator({
      name,
      role,
      imageLink,
      team
    })
    setName('')
    setRole('')
    setImageLink('')
    setTeam('')
  };

  const formRegisterNewTeam = (event) =>{
    event.preventDefault();
    props.onRegisterNewTeam({
      name: newTeamName,
      color: teamColor
    });

    setNewTeamName('');
    setTeamColor('');
  }

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [team, setTeam] = useState("");

  const [teamColor, setTeamColor] = useState("");
  const [newTeamName, setNewTeamName] = useState("");


  return (
    <section className="forms">

      <form onSubmit={formSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <TextFild
          label="Nome"
          placeholder="Digite seu nome"
          required={true}
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextFild
          label="Cargo"
          placeholder="Digite seu cargo"
          required={true}
          value={role}
          onChange={(event) => {
            setRole(event.target.value);
          }}
        />
        <TextFild
          label="Imagem"
          placeholder="Informe o endereço de imagem"
          required={true}
          value={imageLink}
          onChange={(event) => {
            setImageLink(event.target.value);
          }}
        />
        <DropDown
          label="Time"
          itens={props.itens}
          required={true}
          value={team}
          onChange={(event) => {
            setTeam(event.target.value);
          }}
        />
        <Button>Criar Card</Button>
      </form>

      <form onSubmit={formRegisterNewTeam}>
        <h2>Preencha os dados para criar um novo time.</h2>

        <TextFild
          label="Nome"
          placeholder="Digite o novo time"
          required={true}
          value={newTeamName}
          onChange={(event) => {
            setNewTeamName(event.target.value);
          }}
        />
        <TextFild
          label="Cor"
          placeholder="Digite a cor do time"
          required={true}
          value={teamColor}
          onChange={(event) => {
            setTeamColor(event.target.value);
          }}
        />
        <Button>Criar novo time</Button>
      </form>

    </section>
  );
};

export default Forms;
