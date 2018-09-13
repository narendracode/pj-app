import {Item} from './item';

export class Bill {
	  id: string;
	  buyerId: string;
	  buyerName: string;
	  items: Item[];
	  discount: number;
	  tax: number;
	  status: number;
	  total: number;
	  subTotal: number;
	  amountPaid: number;
	  createdAt: Date;
	  updatedAt: Date;
  constructor(
	  buyerId: string,
	  buyerName: string,
	  items: Item[],
	  discount: number,
	  tax: number,
	  amountPaid: number
  ){  }
}