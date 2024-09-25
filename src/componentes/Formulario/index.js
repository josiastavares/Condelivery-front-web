import Campo from '../Campo'
import './Formulario.css'

const Formulario = () => {

    return(
        <div className="formulario">
            <Campo  label="Nome do edifício" placeholder="Mirante Azul" />
            <Campo  label="CEP" placeholder="12345-678" />
            <Campo  label="Número de telefone" placeholder="Digite seu número de telefone" />
            <Campo  label="Rua" placeholder="Nome da rua" />
            <Campo  label="Alterar senha" placeholder="Digite sua nova senha" />
            <Campo  label="Número" placeholder="123" />
            <Campo  label="Confirmar senha" placeholder="Confirme sua senha" />
            <Campo  label="Ponto de referência" placeholder="Digite o ponto de referência" />
            <button className='botaoForm'>Atualizar</button>
        </div>
    )
}

export default Formulario