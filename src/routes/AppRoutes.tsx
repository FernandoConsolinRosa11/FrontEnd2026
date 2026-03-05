import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Index";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    )
}