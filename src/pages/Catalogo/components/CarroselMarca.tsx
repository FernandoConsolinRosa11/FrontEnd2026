import { useState } from "react";
import "./Carrosel.css";

export default function Carrosel() {

    const carros = [
        "Lamborghini", "Ferrari", "Porsche", "McLaren", "Bugatti",
        "Aston Martin", "Pagani", "Koenigsegg", "Maserati", "Bentley",
        "Rolls-Royce", "Lotus", "Alfa Romeo", "Audi", "BMW",
        "Mercedes-Benz", "Nissan", "Toyota", "Chevrolet", "Ford"
    ];

    // duplicamos 3 vezes para criar loop infinito visual
    const extendedCarros = [...carros, ...carros, ...carros];
    const centerOffset = carros.length; // posição central da repetição do meio

    const [index, setIndex] = useState(0);

    function proximo() {
        setIndex(prev => prev + 1);
    }

    function anterior() {
        setIndex(prev => prev - 1);
    }

    return (
        <div className="carrossel-container mx-auto">
            <div className="carrossel-wrapper">
                <button onClick={anterior}>◀</button>

                <div className="carrossel-viewport">
                    <div
                        className="carrossel-itens"
                        style={{
                            transform: `translateX(calc(50% - ${(index + centerOffset) * 240}px - 120px))`
                        }}
                    >
                        {extendedCarros.map((carro, i) => {
                            let classe = "carrossel-item";

                            if (i === index + centerOffset) classe += " carrossel-centro";
                            else if (i === index + centerOffset - 1 || i === index + centerOffset + 1) classe += " opacity-medio";
                            else classe += " opacity-fraco";

                            return <p key={i} className={classe}>{carro}</p>;
                        })}
                    </div>
                </div>

                <button onClick={proximo}>▶</button>
            </div>
        </div>
    );
}