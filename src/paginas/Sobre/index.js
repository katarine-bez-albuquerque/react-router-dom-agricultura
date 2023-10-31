import BlocoEsquerdo from 'componentes/BlocoEsquerdo';
import styles from './Sobre.module.css';
import { ImagensGlobais } from 'ImagensGlobais';
import Paragrafo from 'componentes/Paragrafo';

const Sobre = () => {
    return (
        <>
            <section className={styles.apresenta}>
                <BlocoEsquerdo
                    imagem={ImagensGlobais.imgame04}
                    alt="Sobre Agricultura"
                    titulo="Sobre Agricultura"
                    subtitulo="Saiba mais"
                    paragrafo=""
                />
            </section>
            <section className={styles.apresenta}>
                <Paragrafo>
                    <a target='_blank' rel="noreferrer" href="https://www.embrapa.br/visao/trajetoria-da-agricultura-brasileira">Trajetória da agricultura brasileira</a> 
                </Paragrafo>
                <Paragrafo>
                    <a target='_blank' rel="noreferrer" href="https://www.embrapa.br/vii-plano-diretor/a-agricultura-brasileira">Agricultura brasileira</a> 
                </Paragrafo>
                <Paragrafo>
                    <a target='_blank' rel="noreferrer" href="https://www.yarabrasil.com.br/conteudo-agronomico/blog/tipos-de-agricultura/">Tipos de agricultura</a> 
                </Paragrafo>
                <Paragrafo>
                    <a target='_blank' rel="noreferrer" href="https://scientiageneralis.com.br/index.php/SG/article/view/362#:~:text=Introdu%C3%A7%C3%A3o%3A%20A%20agricultura%20%C3%A9%20de,a%20base%20da%20economia%20mundial.">Importância da agricultura</a> 
                </Paragrafo>
                <Paragrafo>
                    <a target='_blank' rel="noreferrer" href="https://blog.aegro.com.br/producao-agricola/">Tipos de produção agrícola</a> 
                </Paragrafo>
                <Paragrafo>
                    <a target='_blank' rel="noreferrer" href="https://pt.wikipedia.org/wiki/Agricultura">Wikipedia Agricultura</a> 
                </Paragrafo>
            </section>
        </>
    );
}

export default Sobre;