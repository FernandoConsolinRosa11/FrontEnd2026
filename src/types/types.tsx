
export type InputProps = {
  texto?: string;
  onClick?: () => void;
  className?: string; 
  type?: 'button' | 'submit' | 'reset';
};

export interface Review {  //Reviews Carrossel Home
  id: number;
  name: string;
  content: string;
  carPurchased: string;
  img: string;
  stars:number;
}

export interface CardCarProps { 
  id: string;
  brand: string;      // Ex: "Porsche"
  name: string;       // O nome real do carro (Ex: "911 Carrera GTS")
  price: number;
  imgUrl: string;
  category?: string;   // Ex: "Esportivo"
  year?: string;
  kilometers?: number;
  specs?: {
    engine?: string;   // Ex: "4.0 V8"
    drive?: string;    // Ex: "4x4"
    transmission: string; // Ex: "Automático"
    fuel?:string; // flex / gasolina / diesel
    maxSpeed?:number;
    zeroToHundred?:number; 
  }
  features?: string[]; // Ex: "Teto Solar","Banco De Couro","Blindado"
}

export interface CardGarageProps extends CardCarProps{ 
  status : 'Processando' | 'Entregue' | 'Cancelado';
  purchaseDate: string;
}
