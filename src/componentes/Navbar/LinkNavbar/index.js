const LinkNavbar = ({ href, children }) => {
    return(
        <li>
            <a target="_blank" href={ href } rel="noreferrer">
                { children }
            </a>
        </li>
    );
}

export default LinkNavbar;