import Logo from "../assets/icons/logo.png";
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
    <>
      <nav className="font-medium bg-[#121212] shadow-2xl py-3">
        <div className="container-fluid flex items-center justify-between">
          <div className="flex-1  flex justify-start mx-2">
            <Link className="text-white text-decoration-none text-[20px]" to=''>
              <i className="bi bi-list"></i>
              Menu
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link to='/'><img src={Logo} alt="logo" className="text-center w-25 m-auto" /></Link>
          </div>
          <div className="flex-1 flex justify-end gap-6 text-sm uppercase tracking-widest mx-2">
            <Link to='/abacate' className=" text-white text-decoration-none">login</Link>
            <Link to=''  className=" text-white text-decoration-none">cadastro</Link>
          </div>
        </div>
      </nav>
    </>
  );
}