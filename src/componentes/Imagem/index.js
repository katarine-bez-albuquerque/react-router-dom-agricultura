const Imagem = ({ classe, src, alt }) => {
    return(
        <img className={ classe } src={ src } alt={ alt } />
    );
}

export default Imagem;