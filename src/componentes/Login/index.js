import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {

    return (
        <div className="corpo-login">
            <header className="cabecalho-login">
                <img src="./imagens/logo.png" alt="Logo" className="logo" />
            </header>
            <main className="principal-login">
                <div className="conteudo-login">

                    <h1 className="titulo-login">Bem-vindo parceiro</h1>
                    <form id="login-form">
                        <input className="input-form" type="text" name="Celular" id="Celular" placeholder="Celular" required autocomplete="tel" />
                        <input type="password" className="senha input-form" name="senha" id="senha" placeholder="Senha" required autocomplete="current-password" />
                        <div>
                            <a href="">Esqueci minha senha</a>
                            <div>
                                <input type="checkbox" name="manter-conectado" className="manter-conectado" id="manter-conectado" value="manter-conectado" />
                                <label for="manter-conectado" className="manter-conectado-txt">Manter Conectado</label>
                            </div>
                        </div>
                        <Link to='/usuarios'><button className='botao-login' type="submit">Acessar</button></Link>
                    </form>
                    <p className="cadastre-se">Ainda não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></p>
                </div>
                <div className="personagem">
                    <img className="perso imagem-login" src="./imagens/sacola-personagem.png" alt="Personagem" />
                </div>
            </main>
        </div>
    )
}

export default Login
