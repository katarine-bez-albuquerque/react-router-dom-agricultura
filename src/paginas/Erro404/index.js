import Paragrafo from "componentes/Paragrafo";
import Subtitulo from "componentes/Subtitulo";
import styles from './Erro404.module.css';

const Erro404 = () => {
    return(
        <section className={ styles.erro404 }>
            <aside>
                <Subtitulo>A página não foi encontrada</Subtitulo>
                <br/>
                <h1>Erro 404</h1>
                <br/>
                <Paragrafo>Tente Novamente!</Paragrafo>
            </aside>            
        </section>
    );
}

export default Erro404;