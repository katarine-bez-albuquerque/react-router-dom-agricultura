import { ImagensGlobais } from "ImagensGlobais";
import Card from "componentes/Card";
import styles from './Home.module.css';
import Paragrafo from "componentes/Paragrafo";
import Titulo from "componentes/Titulo";
import Subtitulo from "componentes/Subtitulo";
import Imagem from "componentes/Imagem";
import BlocoEsquerdo from "componentes/BlocoEsquerdo";
import BlocoDireito from "componentes/BlocoDireito";

const Home = () => {
    return(
        <>            
            <main>
                <section className={ styles.post }>
                    <aside>
                        <Card src={ ImagensGlobais.imagem1 } alt="Imagem 1" />
                        <Card src={ ImagensGlobais.imagem2 } alt="Imagem 2" />
                        <Card src={ ImagensGlobais.imagem3 } alt="Imagem 3" />
                        <Card src={ ImagensGlobais.imagem4 } alt="Imagem 1" />
                        <Card src={ ImagensGlobais.imagem5 } alt="Imagem 2" />
                        <Card src={ ImagensGlobais.imagem6 } alt="Imagem 3" />
                    </aside>                
                </section>
                <section className={ styles.significado }>
                    <aside>
                        <h1>Agricultura</h1>
                        <Paragrafo>
                            O cultivo do solo, por procedimentos, métodos e técnicas próprias, para produzir alimentos; como legumes, cereais, frutas, e verduras; ou para uso como matérias-primas na indústria.
                        </Paragrafo>
                    </aside>                
                </section>
                <section className={ styles.info }>
                    <BlocoEsquerdo
                        imagem={ ImagensGlobais.imgame01 }
                        alt="Tipos de Agricultura"
                        titulo="Tipos de Agricultura"
                        subtitulo="São quatro tipos"
                        paragrafo="Tradicional, Moderna, Familiar, Patronal e Orgânica" 
                    />                   
                </section>
                <section className={ styles.agrupamento }>
                    <section>
                        <aside>
                            <Titulo>Agrupamento de Produtos</Titulo>
                            <Subtitulo>Agrupamentos e Classes</Subtitulo>
                            <Paragrafo>Os produtos agrícolas são os alimentos, fibras, combustíveis e matérias-primas; já as classes são os cereais, vegetais, frutas, óleos, carnes, leite, ovos e fungos.</Paragrafo>
                        </aside>
                        <article>
                            <Imagem src={ ImagensGlobais.imagem001 } alt="Imagem 001" />
                            <Imagem src={ ImagensGlobais.imagem002 } alt="Imagem 002" />
                            <Imagem src={ ImagensGlobais.imagem003 } alt="Imagem 003" />
                            <Imagem src={ ImagensGlobais.imagem004 } alt="Imagem 004" />
                        </article>
                    </section>                                        
                </section>
                <section className={ styles.bloco1 }>
                    <BlocoEsquerdo                        
                        imagem={ ImagensGlobais.imgame02 }
                        alt="Trabalhadores"
                        titulo="Trabalhadores"
                        subtitulo="Atividades Desenvolvidas"
                        paragrafo="Segundo o Site Wikipedia, o número de pessoas empregadas pode ser superior a 80% nos países menos desenvolvidos e inferior a 2% nos paíse mais desenvolvidos. Durante a sua história houve várias mudanças até chegar na atualidade." 
                    />
                </section>
                <section className={ styles.bloco2 }>
                    <BlocoDireito
                        imagem={ ImagensGlobais.imgame03 }
                        alt="Origem de Agricultura"
                        titulo="Origem de Agricultura"
                        subtitulo="Desenvolvimento"
                        paragrafo="Permitiu ao longo do tempo no crescimento populacional, de forma independente em diferentes partes no mundo. São diversos tipos de atividades que usam tipos de técnicas diversas que hoje são essenciais para a vida humana." 
                    />
                </section>
            </main>
            <aside>
                <section className={ styles.historia }>
                    <aside>
                        <Titulo>Como Surgiu?</Titulo>
                        <Subtitulo>Sua história</Subtitulo>
                        <Paragrafo>Iniciou-se com a domesticação de plantas e animais, os desenvolvendo para a produtividade em diversos ramos. De forma independente e de diferentes técnicas, envolvendo o mundo com suas características e técnicas de uso.</Paragrafo>
                    </aside>
                </section>
                <section className={ styles.listaImagens }>
                    <Imagem src={ ImagensGlobais.maca } alt="Maçã" />
                    <Imagem src={ ImagensGlobais.laranja } alt="Laranja" />
                    <Imagem src={ ImagensGlobais.uva } alt="Uva" />
                    <Imagem src={ ImagensGlobais.limao } alt="Limão" />
                </section>
            </aside>
        </>
    );
}

export default Home;