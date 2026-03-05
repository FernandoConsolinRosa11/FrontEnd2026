import { Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "../pages";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
        </Routes>
    )
}