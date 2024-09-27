import { Link } from 'react-router-dom'
import './Cadastro.css'

const Cadastro = () => {

    return (
        <div className="corpo-cadastro">
            <header className="cabecalho-cadastro">
                <div className="logo-wrapper">
                    <img src="./imagens/logo.png" alt="Logo" className="logo" />
                </div>
            </header>
            <main className="principal-cadastro">
                <div className="personagem">
                    <img className="perso imagem-login" src="./imagens/sacola-personagem.png" alt="Personagem" />
                </div>
                <div className="conteudo-cadastro">
                    <div className="img cadastro"></div>
                    <div className="form-container">
                        <h1 className='titulo-cadastro'>Seja nosso parceiro</h1>
                        <form id="cadastro-form">
                            <input className="input-form" type="text" name="Celular" id="Celular" placeholder="Celular" required autocomplete="tel" />
                            <input className="input-form" type="password" name="senha" id="senha" placeholder="Senha" required autocomplete="new-password" />
                            <div className="manter-conectado-caixa">
                                <input className="input-form" type="checkbox" name="manter-conectado" id="manter-conectado" value="manter-conectado" />
                                <label for="manter-conectado" className="manter-conectado-txt">Lembrar-me</label>
                            </div>
                            <button className="botao-cadastro" type="submit">Acessar</button>
                        </form>
                        <p className="cadastre-se">Já tem uma conta? <Link to='/login'>Acesse</Link></p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cadastro
