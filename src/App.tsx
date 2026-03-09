import AppRoutes from "./routes/AppRoutes";
import { Navbar, Footer } from "./layout";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ["/Login", "/Register"];
  const isLoginOrRegister = hideNavbarAndFooter.includes(location.pathname);

  return (
    <>
      {!isLoginOrRegister && <Navbar />}

      <AppRoutes />

      {!isLoginOrRegister && <Footer />}
    </>
  );
}

export default App;
