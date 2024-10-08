import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CardUsuario from './componentes/CardUsuario';
import Formulario from './componentes/Formulario';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import SecaoMenu from './componentes/SecaoMenu';
import Inicial from './componentes/Inicial';
import Cadastro from './componentes/Cadastro';
import Login from './componentes/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:
          <Inicial />
      },
      {
        path: "entregas",
        element:
          <div>
            <Cabecalho />
            <main className='main-dashboard'>
              <SecaoMenu />
              <section className='secaoCards'>
                <CardUsuario nome='Justin' imagem='./imagens/Justin.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Emery' imagem='./imagens/Emery.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Rayna' imagem='./imagens/Rayna.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Cheyenne' imagem='./imagens/Cheyenne.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Tatiana' imagem='./imagens/Tatiana.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Makenna' imagem='./imagens/Makenna.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Miracle' imagem='./imagens/Miracle.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Alfredo' imagem='./imagens/Alfredo.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Marley' imagem='./imagens/Marley.png' descricao='entregador' apto='Apto 58C' />
              </section>
            </main>
            <Rodape />
          </div>
      },
      {
        path: "perfil",
        element:
          <div>
            <Cabecalho />
            <main className='main-dashboard'>
              <SecaoMenu />
              <section className='secaoCards'>
                <div className='divformulario'>
                  <img className="imagemPerfil" src="./imagens/imagem-predio.png" />
                  <Formulario />
                </div>
              </section>
            </main>
            <Rodape />
          </div>
      },
      {
        path: "Cadastro",
        element:
        <Cadastro />
      },
      {
        path: "Login",
        element:
        <Login />
      },
      {
        path: "usuarios",
        element:
        <div>
            <Cabecalho />
            <main className='main-dashboard'>
              <SecaoMenu />
              <section className='secaoCards'>
                <CardUsuario nome='Skylar' imagem='./imagens/Skylar.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Erin' imagem='./imagens/Erin.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Cooper' imagem='./imagens/Cooper.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Lindsey' imagem='./imagens/Lindsey.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Talan' imagem='./imagens/Talan.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Ruben' imagem='./imagens/Ruben.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Hanna' imagem='./imagens/Hanna.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Cristofer' imagem='./imagens/Cristofer.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Omar' imagem='./imagens/Omar.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Madelyn' imagem='./imagens/Madelyn.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Cheyenne' imagem='./imagens/Cheyenne2.png' descricao='entregador' apto='Apto 58C' />
                <CardUsuario nome='Martin' imagem='./imagens/Martin.png' descricao='entregador' apto='Apto 58C' />
              </section>
            </main>
            <Rodape />
          </div>
      },
      
    ]
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

