import AppRoutes from "./routes/AppRoutes";
import { Navbar, Footer } from "./layout";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import "./App.css";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ["/Login", "/Register"];
  const isLoginOrRegister = hideNavbarAndFooter.includes(location.pathname);

  return (
  
    <AuthProvider>
      {!isLoginOrRegister && <Navbar />}

      <AppRoutes />

      {!isLoginOrRegister && <Footer />}
    </AuthProvider>
  );
}

export default App;