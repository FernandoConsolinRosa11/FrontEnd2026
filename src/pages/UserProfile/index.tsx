import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { userService } from "../../services/userService";
import { Modal } from "./components/Modal";
import { EditFieldForm } from "./components/EditFieldForm";
import type {UserData} from  "../../types/types"
// Definir uma interface evita o uso de 'any' e melhora o autocomplete

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activeModal, setActiveModal] = useState<"password" | "phone" | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Lógica de busca isolada para limpeza do useEffect
  const fetchUserProfile = useCallback(async () => {
    if (!id || id === ":id" || id === "undefined") return;

    try {
      const data = await userService.getProfile(id);
      const profileData = data.user ?? data;
      setUserData(profileData);
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  // 2. Handler único de atualização
  const handleUpdate = async (field: keyof UserData | "password", value: string) => {
    try {
      const updatedUser = await userService.updateProfile(id!, { [field]: value });
      
      // Atualiza o estado apenas se a API retornar sucesso
      setUserData(updatedUser);
      setActiveModal(null);
      console.log(`${field} atualizado com sucesso!`);
    } catch (err: any) {
      console.error("Falha na atualização:", err.message);
      alert(`Erro: ${err.message}`);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-[#121212] min-h-screen flex items-center justify-center text-gray-500 tracking-widest uppercase">
        Carregando Perfil...
      </div>
    );
  }

  // Componente de linha de informação para evitar repetição de JSX
  const InfoRow = ({ label, value, onEdit }: { label: string; value: string; onEdit?: () => void }) => (
    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
      <span className="text-lg uppercase tracking-widest text-gray-400">{label}</span>
      <div className="flex items-center gap-3">
        <span className="text-lg font-medium break-all ml-4">{value}</span>
        {onEdit && (
          <button onClick={onEdit} className="hover:text-gray-400 transition-colors scale-105">
            <i className="bi bi-pencil-square"></i>
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-[#121212] text-white font-sans py-10 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-8 pb-2">
          <h1 className="text-2xl font-light tracking-widest uppercase">Meu Perfil</h1>
        </header>

        <main className="border border-gray-700 p-1 bg-[#12121269]">
          <section className="p-6 border-b border-gray-800">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-1">Usuário</span>
            <h2 className="text-3xl italic font-semibold tracking-tight">{userData?.name}</h2>
          </section>

          <div className="p-6 space-y-4">
            <InfoRow label="Email" value={userData?.email || ""} />
            <InfoRow label="Senha" value="••••••••••••••" onEdit={() => setActiveModal("password")} />
            <InfoRow label="CEP" value={userData?.cep || ""} />
            <InfoRow label="CPF" value={userData?.cpf || ""} />
            <InfoRow label="Telefone" value={userData?.number || ""} onEdit={() => setActiveModal("phone")} />
          </div>
        </main>
      </div>

      {/* Modais condensados logicamente */}
      <Modal 
        isOpen={activeModal !== null} 
        onClose={() => setActiveModal(null)} 
        title={activeModal === "password" ? "Segurança" : "Contato"}
      >
        <EditFieldForm 
          label={activeModal === "password" ? "Nova Senha" : "Novo Telefone"}
          type={activeModal === "password" ? "password" : "text"}
          defaultValue={activeModal === "phone" ? userData?.number : ""}
          onSave={(val) => handleUpdate(activeModal === "password" ? "password" : "number", val)} 
        />
      </Modal>
    </div>
  );
};

export default UserProfile;