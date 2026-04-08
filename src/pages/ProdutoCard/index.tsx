export default function ProdutoCard() {
  return (
    <div className="bg-[#121212]">
      <div >
        <main className="mx-auto max-w-7xl p-4 md:p-8">
          <div className="bg-white rounded-t-sm rounded-b-none shadow-sm border border-gray-200 overflow-hidden mb-6 p-3!">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-20 flex md:flex-col gap-2 p-2 border-b md:border-b-0 md:border-r border-gray-100 gallery-scrollbar overflow-x-auto md:overflow-y-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <button className="shrink-0 w-16 h-16 border-2 border-blue-60 shrink-0.5 focus:outline-none">img</button>
                <button className="shrink-0 w-16 h-16 border border-gray-200 hover:border-blue-30 shrink-0.5 focus:outline-none transition">img</button>
                <button className="shrink-0 w-16 h-16 border border-gray-200 hover:border-blue-30 shrink-0.5 focus:outline-none transition">img</button>
                <button className="shrink-0 w-16 h-16 border border-gray-200 hover:border-blue-30 shrink-0.5 focus:outline-none transition">img</button>
                <button className="shrink-0 w-16 h-16 border border-gray-200 hover:border-blue-300 rounded p-0.5 focus:outline-none transition relative group">
                  <div className="absolute inset-0.5 bg-black/60 rounded-sm flex items-center justify-center group-hover:bg-black/70 transition">
                    <span className="text-white font-bold text-xl">+8</span>
                  </div>
                </button>
              </div>

              <div className="grow bg-white flex items-center justify-center p-4 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">img</div>

              <div className="w-full md:w-[380px]  flex flex-col ">
                <div className="flex justify-between items-start mb-1">
                  <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                    Mercedes-Benz <span className="text-[#C59958]">GLE 400d</span>
                  </h1>
                 
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6 pb-4 border-b border-gray-100">
                  3.0 V6 DIESEL COUPÉ 4MATIC 9G-TRONIC
                </p>

                <div className="mb-8">
                  <p className="text-sm font-medium text-gray-500">
                    Preço à vista
                  </p>
                  <p className="text-5xl font-black text-gray-950 tracking-tighter">
                    <span className="text-2xl font-bold align-top">R$</span>{" "}
                    719.900
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
                    <p className="font-bold text-gray-900">2023 / 2023</p>
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
                    <p className="font-bold text-gray-900">Automática (9G)</p>
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
                  3.0 V6 Diesel
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black">Tração</p>
                <p className="text-xs font-bold text-gray-600">
                  4MATIC (Integral)
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black">Carroceria</p>
                <p className="text-xs font-bold text-gray-600">
                  Utilitário esportivo (Coupé)
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
