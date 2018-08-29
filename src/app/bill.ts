import {Item} from './item';

export class Bill {
	  id: string;
	  buyerId: string;
	  buyerName: string;
	  items: Item[];
	  discount: number;
	  tax: number;
	  status: number;
	  amountPaid: number;
  constructor(
	  buyerId: string,
	  buyerName: string,
	  items: Item[],
	  discount: number,
	  tax: number,
	  amountPaid: number
  ){  }
}