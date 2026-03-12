import Image from "./cardimage.jpg";

export default function CardCarro() {
  return (
    <div className="w-full max-w-[400px] bg-gray-800 text-white rounded-lg shadow-md overflow-hidden mt-5">
      {/* Imagem responsiva */}
      <img
        src={Image}
        alt="Logo"
        className="w-full h-48 md:h-56 lg:h-64 object-cover"
      />

      {/* Conteúdo do card */}
      <div className="p-4">
        <h5 className="text-lg font-bold mb-2">
          Titulo do carro dinamico do banco
        </h5>
        <p className="text-gray-200 text-sm mb-2">legenda dinamica</p>
        <p className="text-gray-400 text-xs">data de post do carro</p>
      </div>
    </div>
  );
}