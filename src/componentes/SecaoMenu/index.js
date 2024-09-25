import './SecaoMenu.css'
import BotaoMenu from '../BotaoMenu';


import { useLocation } from 'react-router-dom';

const SecaoMenu = () => {
  const location = useLocation(); // Captura a URL atual

  return (
    <section className='secaoMenu'>
      <BotaoMenu 
        texto="Usuários" 
        imagem="usuario" 
        linkMenu='/'
        classeAtiva={location.pathname === '/' ? 'botao-menu-ativo' : ''} 
      />
      <BotaoMenu 
        texto="Entregas" 
        imagem="entregas" 
        linkMenu='/entregas'
        classeAtiva={location.pathname === '/entregas' ? 'botao-menu-ativo' : ''} 
      />
      <BotaoMenu 
        texto="Perfil" 
        imagem="perfil" 
        linkMenu='/perfil'
        classeAtiva={location.pathname === '/perfil' ? 'botao-menu-ativo' : ''} 
      />
    </section>
  );
};

export default SecaoMenu;