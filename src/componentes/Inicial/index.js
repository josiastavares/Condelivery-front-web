import { Link } from 'react-router-dom';
import './Inicial.css'

const Inicial = () => {

    document.addEventListener('DOMContentLoaded', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuList = document.getElementById('menu-list');
        const closeMenuButton = document.getElementById('close-menu');
    
        // Abrir/fechar menu ao clicar no ícone do menu móvel
        mobileMenu.addEventListener('click', () => {
            const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
            mobileMenu.setAttribute('aria-expanded', !isExpanded);
            menuList.classList.toggle('show');
            menuList.setAttribute('aria-hidden', isExpanded);
        });
    
        // Fechar menu ao clicar no botão de fechar
        closeMenuButton.addEventListener('click', () => {
            menuList.classList.remove('show');
            mobileMenu.setAttribute('aria-expanded', 'false');
            menuList.setAttribute('aria-hidden', 'true');
        });
    
        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', (event) => {
            if (!mobileMenu.contains(event.target) && !menuList.contains(event.target)) {
                menuList.classList.remove('show');
                mobileMenu.setAttribute('aria-expanded', 'false');
                menuList.setAttribute('aria-hidden', 'true');
            }
        });
    });

    return (
        <div>
            <header className='cabecalho-inicial'>
                <div className="menu-home">
                    <div className="logo">
                        <img src="./imagens/condelivery.png" alt="logo" />
                    </div>
                    <div className="menu-toggle" id="mobile-menu">
                        <i className="icone fas fa-bars"></i>
                    </div>
                    <nav className="cabecalho-menu">
                        <ul className="menu-list" id="menu-list">
                            <li><a href="#sobre-nos">Sobre Nós</a></li>
                            <li><a href="#servicos">Serviços</a></li>
                            <li><a href="#equipe">Equipe</a></li>
                            <li><a href="#app">App</a></li>
                            <button id="close-menu">X</button>

                        </ul>

                    </nav>
                    <div className="botao-container">
                        <Link to='/login' className="botao_entrar">Entrar</Link>
                        <Link to='/cadastro' className="botao_cadastrar">Cadastrar</Link>
                    </div>
                </div>
            </header>



            <main className='principal-inicial'>
                <section className="capa">
                    <div className="capa_texto">
                        <h2>Transformando a experiência de delivery em <span>condomínios</span></h2>
                        <p>Utilizando o Condelivery, suas entregas chegam de forma rápida e segura até a sua porta, trazendo
                            comodidade e praticidade para o seu dia a dia. Simplifique sua vida com a integração eficiente dos
                            principais serviços de delivery.</p>
                    </div>
                    <div className="capa_imagem">
                        <img src="./imagens/homem.png" alt="imagem homem com sacola" />
                    </div>
                </section>

                <section className="parceiros">
                    <div>
                        <h4>Fique de olho em todos os parceiros disponíveis</h4>
                        <img src="./imagens/parceiros.png" alt="parceiros logo" />
                    </div>
                </section>

                <section className="sobre-nos">
                    <div className="sobre-nos-container">
                        <div className="sobre-nos-imagem">
                            <img src="./imagens/sacola.png" alt="sacola" />
                        </div>
                        <div className="sobre-nos-texto">
                            <h4>SOBRE NÓS</h4>
                            <h3 className='sub-titulo-sobre-nos'>A Essência do Condelivery</h3>
                            <p>Condelivery é um sistema revolucionário de entregas, especialmente projetado para
                                atender as necessidades exclusivas dos condomínios.</p>
                            <div className="cards">
                                <div className="card">
                                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M38 6.05078H10L4 18.0508L24 42.0508L44 18.0508L38 6.05078ZM19.24 16.0508L22.24 10.0508H25.76L28.76 16.0508H19.24ZM22 20.0508V33.4108L10.88 20.0508H22ZM26 20.0508H37.12L26 33.4108V20.0508ZM38.52 16.0508H33.22L30.22 10.0508H35.52L38.52 16.0508ZM12.48 10.0508H17.78L14.78 16.0508H9.48L12.48 10.0508Z" fill="#FFC200" />
                                    </svg>
                                    <h3>Missão</h3>
                                    <p>Facilitar o recebimento de entregas para moradores de condomínios, desde grandes complexos até prédios únicos.</p>
                                </div>
                                <div className="card">
                                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 9.05078C14 9.05078 5.46 15.2708 2 24.0508C5.46 32.8308 14 39.0508 24 39.0508C34 39.0508 42.54 32.8308 46 24.0508C42.54 15.2708 34 9.05078 24 9.05078ZM24 34.0508C18.48 34.0508 14 29.5708 14 24.0508C14 18.5308 18.48 14.0508 24 14.0508C29.52 14.0508 34 18.5308 34 24.0508C34 29.5708 29.52 34.0508 24 34.0508ZM24 18.0508C20.68 18.0508 18 20.7308 18 24.0508C18 27.3708 20.68 30.0508 24 30.0508C27.32 30.0508 30 27.3708 30 24.0508C30 20.7308 27.32 18.0508 24 18.0508Z" fill="#FFC200" />
                                    </svg>
                                    <h3>Visão</h3>
                                    <p>Ser a plataforma líder na gestão de entregas em condomínios, reconhecida pela eficiência, inovação e impacto social positivo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="servicos" className="servicos">
                    <div className="servicos-container">
                        <div className="servicos-texto">
                            <h4>SERVIÇOS</h4>
                            <h3>A Essência do Condelivery</h3>
                            <p>Oferecemos uma ampla gama de serviços para atender às suas necessidades, desde entregas de encomendas até a sua casa, tudo dentro do seu condomínio. Desfrute da conveniência de ter tudo entregue diretamente na sua porta, com rapidez e segurança.</p>
                            <ul>
                                <li>Conexão eficiente com serviços populares de delivery</li>
                                <li>Gerenciamento de Colaboradores de Entrega</li>
                                <li>Alertas e Rastreamento de Entregas</li>
                                <li>Avaliações de Entregas</li>
                            </ul>
                        </div>
                        <div className="servicos-imagem">
                            <img src="./imagens/sacola-personagem.png" alt="Personagem Sacola" />
                        </div>
                    </div>
                </section>

                <section id="equipe">
                    <div className="membros">
                        <h4>MEMBROS</h4>
                        <h3>Conheça Nossa Equipe</h3>
                    </div>
                    <div className="colaboradores">

                        <div className="item-colaboradores">
                            <img className="imagem-inicio img-colaboradores" src="./imagens/Perfil/foto-beatriz.png" alt="Foto Beatriz" />
                            <p className="nome-colaboradores">Beatriz Perez</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/perezbeatriz/" target="_blank"><i className="icone fa-brands fa-linkedin"></i></a>
                                <a href="https://github.com/Bee-Pirez" target="_blank"><i className="icone fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <div className="item-colaboradores">
                            <img className="imagem-inicio img-colaboradores" src="./imagens/Perfil/foto-cibele.png" alt="Foto Cibele" />
                            <p className="nome-colaboradores">Cibele Rodrigues</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/cibelerodriguesl/" target="_blank"><i className="icone fa-brands fa-linkedin"></i></a>
                                <a href="https://www.behance.net/cibelerodriguesl" target="_blank"><i className="icone fa-brands fa-behance"></i></a>
                            </div>
                        </div>
                        <div className="item-colaboradores">
                            <img className="imagem-inicio img-colaboradores" src="./imagens/Perfil/foto-eduardo-tavares.png" alt="Foto Eduardo Tavares" />
                            <p className="nome-colaboradores">Eduardo Tavares</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/eduardodossantostavares/" target="_blank"><i className="icone fa-brands fa-linkedin"></i></a>
                                <a href="https://github.com/josiastavares/" target="_blank"><i className="icone fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <div className="item-colaboradores">
                            <img className="imagem-inicio img-colaboradores" src="./imagens/Perfil/foto-eduardo-meireles.png" alt="Foto Paulo Eduardo" />
                            <p className="nome-colaboradores">Paulo Eduardo</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/eduardo-meireles-lima/" target="_blank"><i className="icone fa-brands fa-linkedin"></i></a>
                                <a href="https://github.com/EduardoMeireles390/" target="_blank"><i className="icone fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <div className="item-colaboradores">
                            <img className="imagem-inicio img-colaboradores" src="./imagens/Perfil/foto-tiago.png" alt="Foto Tiago Andrade" />
                            <p className="nome-colaboradores">Tiago Andrade</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/andrade-tiago/" target="_blank"><i className="icone fa-brands fa-linkedin"></i></a>
                                <a href="" target="_blank"><i className="icone fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </section >
                <section id="app" className="imagem_baixeoapp">
                    <img className="imagem-inicio imagem_baixeoapp" src="./imagens/image.png" alt="" />
                </section>
            </main>

            <footer className='rodape-inicial'>

                <div className="footer-bottom">
                    <p className='texto-rodape'>&copy; 2024 Condelivery | Todos os direitos reservados</p>
                </div>
            </footer>

        </div>
    )
}

export default Inicial