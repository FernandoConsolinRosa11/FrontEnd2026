import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { CardCarProps } from "../../types/types";

export default function ProdutoCard() {

  const { id } = useParams();
  const [carro, setCarro] = useState<CardCarProps | null>(null);
  const [loading, setLoading] = useState(true);

  const [imgSelecionada, setImgSelecionada] = useState("");
  useEffect(() => {
    async function fetchCarro() {
      try {
        const res = await fetch(`http://localhost:3000/cars/${id}`);
        const data = await res.json();
        setCarro(data);
        if (data.allImages && data.allImages.length > 0) {
          setImgSelecionada(data.allImages[0]);
        }
      } catch (err) {
        console.error("Erro:", err);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchCarro();
  }, [id]);

  if (loading) return <div className="h-screen bg-[#121212] flex items-center justify-center text-white">Carregando...</div>;
  if (!carro) return <div className="h-screen bg-[#121212] flex items-center justify-center text-white">Carro não encontrado.</div>;
  return (

    <div className="bg-[#121212]">
      <div >
        <main className="mx-auto max-w-7xl p-4 md:p-8">
          <div className="bg-white rounded-t-sm rounded-b-none shadow-sm border border-gray-200 overflow-hidden mb-6 p-3!">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-20 flex md:flex-col gap-2 p-2 border-b md:border-b-0 md:border-r border-gray-100 gallery-scrollbar overflow-x-auto md:overflow-y-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                {carro.allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setImgSelecionada(img)}
                    className={`shrink-0 w-16 h-16 border rounded p-0.5 focus:outline-none transition ${imgSelecionada === img
                      ? "border-blue-500"
                      : "border-gray-200 hover:border-blue-300"
                      }`}
                  >
                    <img
                      src={img}
                      alt={`thumb-${index}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}

              </div>

              <div className="grow bg-white flex items-center justify-center p-4 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">
                <img
                  src={imgSelecionada}
                  alt={carro.name}
                  className="max-h-[450px] object-contain"
                />
              </div>
              <div className="w-full md:w-[380px]  flex flex-col ">
                <div className="flex justify-between items-start mb-1">
                  <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                    {carro.brand} <span className="text-[#C59958]">{carro.name}</span>
                  </h1>

                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6 pb-4 border-b border-gray-100">
                  {carro.specs?.engine} {carro.specs?.fuel} {carro.specs?.transmission}
                </p>

                <div className="mb-8">
                  <p className="text-sm font-medium text-gray-500">
                    Preço à vista
                  </p>
                  <p className="text-5xl font-black text-gray-950 tracking-tighter">
                    <span className="text-2xl font-bold align-top">R$</span>{" "}
                    {carro.price.toLocaleString('pt-BR')}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-sm mb-8">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                      Cidade
                    </p>
                    <p className="font-bold text-gray-900">Curitiba - PR</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                      Ano
                    </p>
                    <p className="font-bold text-gray-900">{carro.year}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                      KM
                    </p>
                    <p className="font-bold text-gray-900">12.500 km</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                      Câmbio
                    </p>
                    <p className="font-bold text-gray-900">{carro.specs?.transmission}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <button className="w-full bg-[#C59958] hover:bg-[#997847] text-white font-black py-4 rounded-lg transition  uppercase tracking-wider text-sm">
                    Ver telefone / Contato
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-b-sm shadow-sm border border-gray-200 p-6! md:p-8">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">
              Recursos e Itens do Veículo
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 text-gray-950">
              <div className="space-y-1">
                <p className="text-sm font-black">Motorização</p>
                <p className="text-xs font-bold text-gray-600">
                  {carro.specs?.engine}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black">Transmissão</p>
                <p className="text-xs font-bold text-gray-600">
                  {carro.specs?.transmission}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black">Potência</p>
                <p className="text-xs font-bold text-gray-600">400 CV</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black">Bancos</p>
                <p className="text-xs font-bold text-gray-600">
                  Couro Nappa Exclusivo
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black">Velocidade Máxima</p>
                <p className="text-xs font-bold text-gray-600">
                  320 Km/h
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black">Tecnologia</p>
                <p className="text-xs font-bold text-gray-600">
                  MBUX com telas de 12.3"
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black">Segurança</p>
                <p className="text-xs font-bold text-gray-600">
                  Pacote Driving Assistance
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
