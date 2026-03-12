import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <h1
                className="text-8xl font-extrabold mb-4 animate-pulse drop-shadow-[0_0_10px_rgba(197,153,88,0.7)]"
                style={{ color: "#C59958" }}
            >
                404
            </h1>

            <p className="text-2xl mb-2 text-center">
                Ops! A página que você procura não está disponível.
            </p>

            <Link
                to="/"
                className="px-6 py-3 shadow-lg hover:shadow-xl rounded-lg font-semibold transition transform"
                style={{ color: "#C59958", textDecoration: "none" }}
            >
                Voltar para o Início
            </Link>
        </div>
    );
}