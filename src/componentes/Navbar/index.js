import { ImagensGlobais } from "ImagensGlobais";
import Imagem from "componentes/Imagem";
import styles from './Navbar.module.css';
import LinkNavbar from "./LinkNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={ styles.navbar }>
            <Link to="/">
                <Imagem src={ ImagensGlobais.logo } alt="Logo" />
            </Link> 
            <ul>
                <Link className={ styles.link } to="/">HOME</Link>
                <Link className={ styles.link } to="/sobre">SOBRE</Link>     
                
                <LinkNavbar href="https://www.linkedin.com/in/katarine-albuquerque/">
                    <Imagem src={ ImagensGlobais.linkedin } alt="Linkedin" />
                </LinkNavbar> 
                     
                <LinkNavbar href="https://github.com/katarineBAlbuquerque">
                    <Imagem src={ ImagensGlobais.github } alt="Github" />
                </LinkNavbar>
            </ul>
        </nav>
    );
}

export default Navbar;