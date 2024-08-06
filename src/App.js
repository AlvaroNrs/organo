import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';

function App() {      
        
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#75C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  /*
  O useState é uma ferramenta específica do React para gerenciar estados, permitindo que um componente reaja a mudanças no estado e se renderize novamente. Pode, por exemplo, ser utilizado para modificar o estado de campo no ciclo de vida do React, enquanto uma let pode apenas ser utilizada para armazenar um valor a uma variável, sem mudar a renderização do componente.
  */
  const [colaboradores, setColaboradores] = useState([]); 

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador.nome, colaborador.cargo, colaborador.imagem);
    //Habilitar ferramente de debug
    //debugger
    //Setando o estado como a lista de todos os colaboradores junto ao novo colaborador
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
      <Footer/>
    </div>
  );
}

export default App;
