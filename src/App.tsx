import { Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './layout/Navbar';
import './app.css'

function App() {

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
