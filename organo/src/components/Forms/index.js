import "./Forms.css";
import TextFild from "../TextFild";

const Forms = () => {
  return (
    <section className="forms">
      <form action="">

        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <TextFild label="Nome" placeholder="Digite seu nome" />
        <TextFild label="Cargo" placeholder="Digite seu cargo" />
        <TextFild label="Imagem" placeholder="Informe o endereço de imagem" />
        <TextFild label="Time" />
      </form>
    </section>
  );
};

export default Forms;
