import "./Forms.css";
import TextFild from "../TextFild";
import DropDown from "../DropDown";
import Button from "../Button";

const Forms = (props) => {

  const formSave = (event) =>{
    event.preventDefault()
    console.log("Formulário enviado!!")
  }

  return (
    <section className="forms">
      <form onSubmit={formSave}>

        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <TextFild label="Nome" placeholder="Digite seu nome" required = {true} />
        <TextFild label="Cargo" placeholder="Digite seu cargo" required = {true} />
        <TextFild label="Imagem" placeholder="Informe o endereço de imagem" />
        <DropDown label="Time" itens = {props.itens} required = {true}/>
        <Button>Criar Card</Button>

      </form>
    </section>
  );
};

export default Forms;
