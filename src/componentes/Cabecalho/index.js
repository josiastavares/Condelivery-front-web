import { Link } from 'react-router-dom'
import './Cabecalho.css'

function Cabecalho() {
    return (
        <header className='cabecalho-dashboard'>
            <Link to="/usuarios"><img src="/imagens/Condelivery.png" alt="Logo Condelivery"/></Link>
            <a href="">
                <Link to="/"><button  className="botao-sair">
                    <img src='/imagens/sair.svg'/>
                    Sair
                </button></Link>
            </a>
        </header>
        
    )
}

export default Cabecalho