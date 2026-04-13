import AppRoutes from "./routes/AppRoutes";
import { Navbar, Footer } from "./layout";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import "./App.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {
  useEffect(() => {
    AOS.init({
      duration: 150,
      once: true,   
      easing: 'linear',
    });
  }, []);

  const location = useLocation();

  const currentPath = location.pathname.toLowerCase();

  const hideLayout = ["/login", "/register"];
  const shouldHide = hideLayout.includes(currentPath);

  return (
    <AuthProvider>
      {!shouldHide && <Navbar />}

      <main className="content">
        <AppRoutes />
      </main>

      {!shouldHide && <Footer />}
    </AuthProvider>
  );
}

export default App;