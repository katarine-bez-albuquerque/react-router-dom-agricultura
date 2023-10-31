import Paragrafo from "componentes/Paragrafo";
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={ styles.footer }>
            <Paragrafo>KBA Digital</Paragrafo>
            <h6>@2023</h6>
        </footer>        
    );
}

export default Footer;