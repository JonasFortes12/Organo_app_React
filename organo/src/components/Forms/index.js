import "./Forms.css";
import TextFild from "../TextFild";
import DropDown from "../DropDown";

const Forms = () => {
  
  let itens = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="forms">
      <form action="">

        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <TextFild label="Nome" placeholder="Digite seu nome" />
        <TextFild label="Cargo" placeholder="Digite seu cargo" />
        <TextFild label="Imagem" placeholder="Informe o endereço de imagem" />
        <DropDown label="Time" itens = {itens}/>

      </form>
    </section>
  );
};

export default Forms;
