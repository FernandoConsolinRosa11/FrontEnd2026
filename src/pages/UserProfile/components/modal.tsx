import React from 'react';
import type { ModalProps } from "../../../types/types";

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] border border-gray-800 p-8 w-full max-w-md shadow-2xl">
        <h3 className="text-xl tracking-[0.2em] uppercase mb-8 font-light text-white">
          {title}
        </h3>
        {children}
        <div className="flex justify-center mt-8">
          <button 
            onClick={onClose} 
            className="text-[10px] tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};