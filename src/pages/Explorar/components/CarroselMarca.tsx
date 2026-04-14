import { useState, useEffect } from "react";
import "./Carrosel.css";
import { logos } from "./logos";

type Props = {
  onChangeMarca: React.Dispatch<React.SetStateAction<string>>;
};

export default function Carrossel({ onChangeMarca }: Props) {
  const carros = [
    { nome: "Todos", logo: logos.todos },
    { nome: "Lamborghini", logo: logos.lamborghini },
    { nome: "Ferrari", logo: logos.ferrari },
    { nome: "Porsche", logo: logos.porsche },
    { nome: "McLaren", logo: logos.mclaren },
    { nome: "Bugatti", logo: logos.bugatti },
    { nome: "Pagani", logo: logos.pagani },
    { nome: "Koenigsegg", logo: logos.koenigsegg },
    { nome: "Rolls-Royce", logo: logos.rolls },
    { nome: "Audi", logo: logos.audi },
    { nome: "BMW", logo: logos.bmw },
    { nome: "Mercedes-Benz", logo: logos.mercedes },
  ];
  // duplicamos 3 vezes para criar loop infinito visual
  const extendedCarros = [...carros, ...carros, ...carros];
  const centerOffset = carros.length; // posição central da repetição do meio

  const [index, setIndex] = useState(0);
  const [,setFiltro] = useState("Todos");

  useEffect(() => {
  const filtroAtual = carros[index].nome;

  setFiltro(filtroAtual);

  console.log("Filtro atual:", filtroAtual);

   onChangeMarca(filtroAtual)

}, [index]);
  function proximo() {
    setIndex((prev) => (prev + 1) % carros.length);
  }

  function anterior() {
    setIndex((prev) => (prev - 1 + carros.length) % carros.length);
  }

  return (
    <div className="carrossel-container mx-auto my-2">
      <div className="carrossel-wrapper">
        <button onClick={anterior}>◀</button>

        <div className="carrossel-viewport">
          <div
            className="carrossel-itens"
            style={{
              transform: `translateX(calc(50cqw - ${(index + centerOffset) * 240 + 120}px))`,
            }}
          >
            {extendedCarros.map((carro, i) => {
              let classe = "carrossel-item";

              if (i === index + centerOffset) classe += " carrossel-centro";
              else if (
                i === index + centerOffset - 1 ||
                i === index + centerOffset + 1
              )
                classe += " opacity-medio";
              else classe += " opacity-fraco";

              return (
                <div key={i} className={`${classe} flex items-center justify-center`}>
                  <img
                    src={carro.logo}
                    alt={carro.nome}
                    className="w-[100px] h-[90px] object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>


        <button onClick={proximo}>▶</button>
      </div>
    </div>
  );
}
