import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userService } from "../../services/userService";
import Button from "../../components/Button";

const UserProfile = () => {
  
 const { id } = useParams<{ id: string }>(); 
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Quando a tela carrega, ele vai no banco via API
      userService.getProfile(id).then(data => {
        setUserData(data);
      });
    }
  }, [id]);

  if (!userData) return <div>Carregando...</div>;

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
              Fernando Consolin Rosa
            </h2>
          </div>

          {/* Grid de Informações */}
          <div className="p-2! space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-lg uppercase tracking-widest text-gray-400">
                Email
              </span>
              <span className="text-lg font-medium break-all ml-4">
                fernandoconsolinrosa11@gmail.com
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-lg uppercase tracking-widest text-gray-400">
                Senha
              </span>
              <span className="text-lg font-medium">••••••••</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-lg uppercase tracking-widest text-gray-400">
                CEP
              </span>
              <span className="text-lg font-medium">87240-000</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-lg uppercase tracking-widest text-gray-400">
                CPF
              </span>
              <span className="text-lg font-medium">098.996.319-57</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-lg uppercase tracking-widest text-gray-400">
                Telefone
              </span>
              <span className="text-lg font-medium">55 44 99958-3036</span>
            </div>
          </div>
        </div>

        {/* Botão de Ação */}
        <div className="mt-8 flex justify-end">
          <Button
            texto="EDITAR PERFIL"
            className=" border border-white text-white px-8 py-2  hover:text-black transition-all duration-300 text-xs tracking-widest font-bold "
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
