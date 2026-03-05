export default function Login() {
    return (
        <div className="flex justify-center items-center register-bg min-h-screen">
                <form className="flex-col gap-8 flex w-full glass-form">
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
                    <button type="submit"
                        className="cursor-pointer mx-auto">
                        Entrar
                    </button>
                </form>
            </div>
    );
}