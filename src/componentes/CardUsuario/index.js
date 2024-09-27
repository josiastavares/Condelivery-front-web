import { useLocation } from 'react-router-dom';
import BotaoSwitch from "../BotaoSwitch"
import "./CardUsuario.css"
    

function CardUsuario({nome, imagem, descricao, apto}) {
    const location = useLocation(); 

    return (
        <div className="card-usuario">
            <img className="imagemCard" src={`${imagem}`} />
            <div className="infosCard">
                <p className="descricaoCard">{descricao}</p>
                <p className="nomeCard">{nome}</p>
            </div>
            {location.pathname === '/' ? (
                <BotaoSwitch />
            ) : (
                <p className="entregueCard">Entregue</p>
            )}
            <p className="aptoCard">{apto}</p>
        </div>
    )
}

export default CardUsuario