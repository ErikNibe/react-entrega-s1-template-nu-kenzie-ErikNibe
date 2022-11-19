import './styles.css';

import Logo from '../../assets/logo.png';
import imgIndexPage from '../../assets/illustration.svg';

export function IndexPage({handleIndexPage}) {
    return(
        <section className='indexPage-container'>
          <div className='container'>
            <div className='content-container'>
              <img src={Logo} alt="Logo" />
              <p>Centralize o controle das suas finanças</p>
              <span>de forma rápida e segura</span>
              <button onClick={handleIndexPage}>Iniciar</button>
            </div>

            <img src={imgIndexPage} alt='Imagem página index' className='img-indexPage'/>
          </div>
        </section>
    )
}