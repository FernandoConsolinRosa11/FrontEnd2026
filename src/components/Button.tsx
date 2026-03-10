import type {InputProps} from "../types/types.tsx"

export default function Button({ texto, onClick, className }: InputProps) {
  return (
    <button
      onClick={onClick}
      className={`
        cursor-pointer
        px-4 py-2
        rounded-sm
        transition
        hover:bg-gray-700
        active:scale-95
        ${className || ""}
      `}
    >
      {texto}
    </button>
  );
}