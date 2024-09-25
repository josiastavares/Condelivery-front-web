import { Outlet } from 'react-router-dom';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import SecaoMenu from './componentes/SecaoMenu';

function App() {
  return (
    <div>
      <Cabecalho />
      <main>
        <SecaoMenu />
        <Outlet />
      </main>
      <Rodape />
    </div>
  );
}

export default App;
