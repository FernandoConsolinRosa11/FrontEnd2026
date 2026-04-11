import type { ReactNode } from 'react';

export type InputProps = {
  texto?: string;
  onClick?: () => void;
  className?: string; 
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
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
  name: string;       
  price: number;
  imgUrl: string;
  category?: string;   // Ex: "Esportivo"
  year?: string;
  model?: string;
  specs?: {
    engine?: string;   // Ex: "4.0 V8"
    drive?: string;    // Ex: "4x4"
    transmission: string; // Ex: "Automático"
    fuel?:string; 
    max_speed?:number;
    zeroToHundred?:number; 
    color?: string;
    potency?:string;
  }
  features?: string[]; // Ex: "Teto Solar","Banco De Couro","Blindado"
}

export interface CardGarageProps extends CardCarProps{ 
  status : 'Processando' | 'Entregue' | 'Cancelado';
  purchaseDate: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cep:string;
  password:string;
  number:string;
}

export interface EditConfig {
  label: string;
  type?: string;
  defaultValue?: string;
  maxLength?: number; 
}

export interface UserData {
  name: string;
  email: string;
  cep: string;
  cpf: string;
  number: string;
}

export interface InfoRowProps {
  label: string;
  value: string;
  onEdit?: () => void;
}

export interface FavoriteData {
  userId: string;
  carId: string;
}

export interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  carId: string;
  userId: string;
}

export interface SpecDescriptionProps {
  titulo: string;
  valor: string | number | undefined;
}

export interface CardGarageProps {
  id: string;
  name: string;
  imgUrl: string;
  offeredValue: number;
  status: string;
  message?: string;
  brand?: string;
}