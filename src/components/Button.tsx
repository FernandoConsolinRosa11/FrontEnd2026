type ButtonProps = {
  texto: string;
  onClick?: () => void;
  className?: string; // para customizações extras
};

export default function Button({ texto, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        cursor-pointer
        px-4 py-2
        rounded
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