import { Lot } from "./lot.model";

export interface Product {
  code: string;
  category: string;
  type: string;
  name: string;
  price: number;
  weight: number;
  presentation: string;
  description: string;
  lots: Lot[];
}
