import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userService } from "../../services/userService";

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<any>(null);

useEffect(() => {
    if (id && id !== ":id" && id !== "undefined") {
      userService
        .getProfile(id)
        .then((data) => {

          console.log("Dados recebidos do banco:", data);

          const profileData = data.user ? data.user : data;
          
          setUserData(profileData);
        })
        .catch((error) => {
          console.error("Erro ao carregar dados do usuário:", error);
        });
    }
  }, [id]);
  
if (!userData) {
  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center text-gray-500 tracking-widest uppercase">
      Carregando Perfil...
    </div>
  );
}

  return (
    <div className=" bg-[#121212]  text-white font-sans py-10!">
      <div className="max-w-5xl mx-auto px-4  bg-[#12121269]">
        {/* Título da Página */}
        <div className="mb-8 pb-4">
          <h1 className="text-2xl font-light tracking-widest uppercase">
            Meu Perfil
          </h1>
        </div>

        <div className="border border-gray-700 p-1">
          <div className="p-6 border-b border-gray-800">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-1">
              Usuário
            </span>
            <h2 className="text-3xl font-italic italic font-semibold tracking-tight ">
              {userData.name}
            </h2>
          </div>

          {/* Grid de Informações */}
          <div className="p-2! space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-lg uppercase tracking-widest text-gray-400">
                Email
              </span>
              <span className="text-lg font-medium break-all ml-4">
                {userData.email}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-800 pb-2">
              <span className="text-lg uppercase tracking-widest text-gray-400">
                Senha
              </span>
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium text-white tracking-tighter">
                  {userData.password}
                </span>
                <button className="hover:text-gray-400! transition-colors  scale-105 py ">
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-lg uppercase tracking-widest text-gray-400">
                CEP
              </span>
              <span className="text-lg font-medium">{userData.cep}</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-lg uppercase tracking-widest text-gray-400">
                CPF
              </span>
              <span className="text-lg font-medium">{userData.cpf}</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-lg uppercase tracking-widest text-gray-400">
                Telefone
              </span>
              <span className="text-lg font-medium">{userData.number}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
