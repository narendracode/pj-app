import {Item} from './item';

export class Bill {

	  id: number;
	  desc: string;
	  fullName: string;
	  totalAmount: number;
	  discount: number;
	  tax: number;
	  items: Item[];

  constructor(
	  id: number,
	  desc: string,
	  fullName: string,
	  totalAmount: number,
	  discount: number,
	  tax: number,
	  items: Item[]
  ){  }

}
