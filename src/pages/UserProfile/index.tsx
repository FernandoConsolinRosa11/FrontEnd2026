import { 
  Button, 
  InfoRow, 
  LoginExpired, 
  Loading, 
  Modal, 
  EditFieldForm, 
  useUserProfile, 
  useParams, 
  isTokenExpired 
} from './Components';

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { 
    userData, isLoading, activeModal, 
    setActiveModal, handleUpdate, handleDelete 
  } = useUserProfile(id);


  if (isLoading) {
    return <Loading />;
  }

  if (isTokenExpired()) {
    return <LoginExpired />;
  }

  return (
    <div className="bg-[#121212] text-white font-sans  py-20! ">
      <div className="max-w-5xl mx-auto px-4 ">
        <header className="mb-8 pb-2 ">
          <h1 className="text-2xl font-light tracking-widest uppercase border-l-4 pl-2! border-[#C59958]">
            Meu Perfil
          </h1>
        </header>

        <main className="border border-gray-700 p-1 bg-[#12121269]">
          <section className="p-6 border-b border-gray-800">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-1">
              Usuário
            </span>
            <h2 className="text-3xl italic font-semibold tracking-tight">
              {userData?.name}
            </h2>
          </section>

          <div className="p-6 space-y-4">
            <InfoRow label="Email" value={userData?.email || ""} />
            <InfoRow
              label="Senha"
              value="••••••••••••••"
              onEdit={() => setActiveModal("password")}
            />
            <InfoRow label="CEP" value={userData?.cep || ""} />
            <InfoRow label="CPF" value={userData?.cpf || ""} />
            <InfoRow
              label="Telefone"
              value={userData?.number || ""}
              onEdit={() => setActiveModal("phone")}
            />
          </div>
        </main>
        <Button
          texto="Deletar Perfil"
          className="hover:text-red-700 my-1"
          onClick={handleDelete}
        />
      </div>

      <Modal isOpen={activeModal !== null} onClose={() => setActiveModal(null)}>
        <h3 className="text-xl tracking-[0.2em] uppercase mb-8 font-light text-white">
          {activeModal === "password" ? "Segurança" : "Contato"}
        </h3>

        <EditFieldForm
          config={{
            label: activeModal === "password" ? "Nova Senha" : "Novo Telefone",
            type: activeModal === "password" ? "password" : "text",
            defaultValue: activeModal === "phone" ? userData?.number : "",
            maxLength: activeModal === "phone" ? 13 : 20,
          }}
          onSave={(val) =>
            handleUpdate(
              activeModal === "password" ? "password" : "number",
              val,
            )
          }
        />
      </Modal>
    </div>
  );
};

export default UserProfile;
