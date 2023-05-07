import Banner from './components/Banner';
import Forms from './components/Forms';


function App() {
  
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
    <div className="App">
      <Banner />
      <Forms itens={itens}/>
    </div>
  );
}

export default App;
