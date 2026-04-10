import { useState } from "react";
import type { ProposalModalProps } from "../../../types/types";
import { Button } from "../../UserProfile/Components";

export default function ProposalModal({
  carId,
  userId,
  onClose,
}: ProposalModalProps) {
  const [offeredValue, setOfferedValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      offeredValue: parseFloat(offeredValue),
      message,
      carId,
      userId,
    };

    console.log("Enviando proposta:", payload);
    // Aqui entra o seu fetch...
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4" >
      <div className="bg-[#121212] border border-white/20 w-full max-w-4xl overflow-hidden shadow-2xl" data-aos="zoom-in">
        <div className="p-6! border-b border-white/10 text-center">
          <h2 className="text-white text-2xl font-light tracking-[0.3em] uppercase">
            Proposta
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="p-6! space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                Valor da Oferta (R$)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                required
                value={offeredValue}
                onChange={(e) => setOfferedValue(e.target.value)}
                placeholder="0,00"
                className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-[#C59958] transition-colors placeholder:text-gray-700 text-lg"
              />
            </div>

            {/* Campo Mensagem */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                Mensagem
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escreva sua mensagem..."
                className="w-full bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-[#C59958] transition-colors placeholder:text-gray-700 resize-none text-sm"
              />
            </div>
          </div>

          {/* Botões Estilo "Confirmar / Cancelar" empilhados */}
          <div className="flex flex-col border-t border-white/10 mt-3">
            <Button
              texto=" Confirmar Proposta"
              type="submit"
              className="w-full py-3 bg-white/5 text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-white/10 transition-all border-b border-white/10 active:scale-[0.99]"
            />
            <Button
              texto="Cancelar"
              type="button"
              onClick={onClose}
              className="w-full py-3 text-gray-500 uppercase tracking-[0.2em] text-[10px] font-bold hover:text-white transition-colors"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
