import "../Auth/css/Register.css"

export default function Register() {
    return (
            <div className="flex justify-center items-center register-bg min-h-screen">
                <form className="flex-col gap-8 flex w-full glass-form">
                    <input
                        className="p-2 bg-white form-redondo"
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                    />
                    <input
                        className="p-2 bg-white form-redondo"
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                    />
                    <input
                        className="p-2 bg-white form-redondo"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        className="p-2 bg-white form-redondo"
                        type="password"
                        name="senha"
                        placeholder="Senha"
                    />
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        
    );
}