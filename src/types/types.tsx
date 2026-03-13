
export type InputProps = {
  texto: string;
  onClick?: () => void;
  className?: string; 
  type?: 'button' | 'submit' | 'reset';
};

export interface Review {
  id: number;
  name: string;
  content: string;
  carPurchased: string;
  img: any;
  stars:number;
}
