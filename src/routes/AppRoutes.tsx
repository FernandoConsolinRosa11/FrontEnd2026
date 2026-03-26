import { Route, Routes } from "react-router-dom";
import { Home, Login, Register , ErrorPage, Explorar, Garagem} from "../pages";
import Menu from "../layout/Menu";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<ErrorPage/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Menu" element={<Menu/>} />
            <Route path="/Explorar" element={<Explorar/>} />
            <Route path="/Garagem" element={<Garagem/>} />
        </Routes>
    )
}