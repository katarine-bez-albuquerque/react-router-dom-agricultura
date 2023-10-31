import Footer from "componentes/Footer";
import Header from "componentes/Header";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
    return(
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
}

export default PaginaBase;