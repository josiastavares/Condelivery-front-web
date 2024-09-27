import './Cabecalho.css'

function Cabecalho() {
    return (
        <header className='cabecalho-dashboard'>
            <img src="/imagens/Condelivery.png" alt="Logo Condelivery"/>
            <a href="">
                <button  className="botao-sair">
                    <img src='/imagens/sair.svg'/>
                    Sair
                </button>
            </a>
        </header>
        
    )
}

export default Cabecalho