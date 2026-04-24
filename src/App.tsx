import { useLocation } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import { Navbar, Footer } from "./layout";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";


function App() {

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