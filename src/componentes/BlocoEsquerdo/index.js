import Imagem from "componentes/Imagem";
import Paragrafo from "componentes/Paragrafo";
import Subtitulo from "componentes/Subtitulo";
import Titulo from "componentes/Titulo";

const BlocoEsquerdo = ({ imagem, alt, titulo, subtitulo, paragrafo }) => {
    return (
        <section>
            <article>
                <Imagem src={ imagem } alt={ alt } />
            </article>
            <aside>
                <Titulo>{ titulo }</Titulo>
                <Subtitulo>{ subtitulo }</Subtitulo>
                <Paragrafo>{ paragrafo }</Paragrafo>
            </aside>
        </section>
    );
}

export default BlocoEsquerdo;