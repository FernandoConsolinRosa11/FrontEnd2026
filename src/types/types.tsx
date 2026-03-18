
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
