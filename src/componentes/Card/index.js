import Imagem from "componentes/Imagem";
import styles from "./Card.module.css";

const Card = ({ src, alt }) => {
    return(
        <article className={ styles.card }>
            <Imagem src={ src } alt={ alt } />
        </article>
    );
}

export default Card;