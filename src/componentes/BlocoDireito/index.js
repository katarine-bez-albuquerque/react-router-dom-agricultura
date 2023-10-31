import Imagem from "componentes/Imagem";
import Paragrafo from "componentes/Paragrafo";
import Subtitulo from "componentes/Subtitulo";
import Titulo from "componentes/Titulo";

const BlocoDireito = ({ imagem, alt, titulo, subtitulo, paragrafo }) => {
    return (
        <section>
            <aside>
                <Titulo>{ titulo }</Titulo>
                <Subtitulo>{ subtitulo }</Subtitulo>
                <Paragrafo>{ paragrafo }</Paragrafo>
            </aside>
            <article>            
                <Imagem src={ imagem } alt={ alt } />
            </article>
        </section>
    );
}

export default BlocoDireito;