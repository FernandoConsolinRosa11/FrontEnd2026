import Mclaren from "../Home/Assets/imgMcLaren750s.jpg";
import Button from "../../components/Button";
import type { CardCarProps } from "../../types/types";


export default function Garagem() {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-10 ">
      <h2 className="text-3xl font-light tracking-widest uppercase mb-10 border-l-4 border-[#C59958] pl-4 ml-10! px-3!">
        Sua Garagem
      </h2>

      <div className="flex flex-wrap gap-6 m-10!">
        <div className="bg-zinc-900/40 border border-zinc-800  w-80 flex flex-col justify-between hover:border-zinc-500 transition-all duration-500 group ">
          <div>
            <div className="mb-6 overflow-hidden">
              <img
                src={Mclaren}
                alt="McLaren 750s"
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>

            <div className="space-y-1 mb-8 ">
              <span className="text-zinc-500 text-xs uppercase tracking-tighter m-2">
                Veículo
              </span>
              <p className="text-xl font-medium tracking-wide text-zinc-100 italic m-2">
                McLaren 750s
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-800/50 pt-6 space-y-3">
            <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-400 my-2 m-2">
              <span>Modelo</span>
              <span className="text-zinc-100">Esportivo</span>
            </div>
            <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-400 my-2 m-2">
              <span>Status</span>
              <span className="text-green-500/80">Entregue</span>
            </div>
            <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-400 my-2 m-2">
              <span>Adquirido</span>
              <span className="text-zinc-100 text-[10px]">11/07/2001</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-2 bg-zinc-800/80 px-3 py-2  border-zinc-700/50">
              <i className="bi bi-coin text-[#C59958]"></i>
              <span className="text-sm font-mono text-zinc-200">
                USD$ 386.700
              </span>
            </div>

            <Button className="bi bi-x-circle text-zinc-500 hover:text-red-400 transition-colors text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
