import { Route, Routes } from "react-router-dom";
import { Home, Login, Register , ErrorPage, Explorar, Garagem} from "../pages";
import Menu from "../layout/Menu";
import UserProfile from "../pages/UserProfile";
import ProdutoCard from "../pages/ProdutoCard";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<ErrorPage/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Menu" element={<Menu/>} />
            <Route path="/Explorar" element={<Explorar/>} />
            <Route path="/Explorar/:id" element={<ProdutoCard/>} />
            <Route path="/Garagem/:id" element={<Garagem/>} />
            <Route path="/Perfil/:id" element={<UserProfile/>} />
        </Routes>
    )
}
