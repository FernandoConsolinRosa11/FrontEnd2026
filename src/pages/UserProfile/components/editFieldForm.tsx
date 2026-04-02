import { useState } from "react";

import type {EditFieldFormProps} from '../../../types/types';

export const EditFieldForm = ({ label, type = "text", defaultValue = "", onSave }: EditFieldFormProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-transparent border-b border-gray-700 py-2 outline-none focus:border-white transition-colors text-white"
          placeholder={label}
        />
      </div>
      <button
        onClick={() => onSave(value)}
        className="w-full border border-white/10 py-3 uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:text-black! transition-all text-white"
      >
        Confirmar
      </button>
    </div>
  );
};