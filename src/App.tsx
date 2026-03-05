import AppRoutes from './routes/AppRoutes';
import { Navbar, Footer } from './layout';
import { useLocation } from "react-router-dom";
import './App.css'

function App() {

  const location = useLocation();

  const esconderLayout =
    location.pathname === "/Login" ||
    location.pathname === "/Register";

  return (
    <>
      {!esconderLayout && <Navbar />}

      <AppRoutes />

      {!esconderLayout && <Footer/>}
    </>
  );
}

export default App;