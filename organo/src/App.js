import Banner from './components/Banner';
import TextFild from './components/TextFild';

function App() {
  return ( 
    <div className="App">
      <Banner />

      <TextFild label="Nome" placeholder="Digite seu nome"/>
      <TextFild label="Cargo" placeholder="Digite seu cargo"/>
      <TextFild label="Imagem" placeholder="Informe o endereço de imagem"/>
      <TextFild label="Time"/>

    </div>
  );
}

export default App;
