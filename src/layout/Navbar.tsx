import Logo from "../assets/icons/logo.png";

export default function Navbar(){
    return (
    <>
      <nav className="font-medium bg-[#121212] shadow-2xl py-3">
        <div className="container-fluid flex items-center justify-between">
          <div className="flex-1  flex justify-start mx-2">
            <a className="text-white text-decoration-none text-[20px]" href="#">
              <i className="bi bi-list"></i>
              Menu
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={Logo} alt="logo" className="text-center w-25 "/>
          </div>
          <div className="flex-1 flex justify-end gap-6 text-sm uppercase tracking-widest mx-2">
            <a href="#" className=" text-white text-decoration-none">login</a>
            <a href="#" className=" text-white text-decoration-none">cadastro</a>
          </div>
        </div>
      </nav>
    </>
  );
}