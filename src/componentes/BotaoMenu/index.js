import "./botaomenu.css"
import { Link } from 'react-router-dom'

function BotaoMenu({texto, imagem, classeAtiva, linkMenu}) {
    return (
        <Link to={linkMenu} className='linkMenu'>
            <button className={`botao-menu ${classeAtiva}`}>
                <img src={`/imagens/${imagem}.svg`}/>
                {texto}
            </button>
        </Link>
        
    )
}

export default BotaoMenu