import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "paginas/Home";
import Sobre from "paginas/Sobre";
import PaginaBase from "paginas/PaginaBase";
import Erro404 from "paginas/Erro404";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PaginaBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path='sobre' element={ <Sobre /> } ></Route>
                    <Route path='*' element={ <Erro404 /> } ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;