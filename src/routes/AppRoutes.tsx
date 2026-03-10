import { Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import { Home, Login, Register } from "../pages";
=======
import { Home, Login, Register , ErrorPage} from "../pages";
import Menu from "../layout/Menu";
>>>>>>> Stashed changes

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Menu" element={<Menu/>} />
        </Routes>
    )
}