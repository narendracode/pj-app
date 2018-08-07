import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bills = [
      { id: 11, desc: '', fullName: 'Mr. Nice' ,totalAmount:0,discount:0,tax:0 },
      { id: 12, desc: '', fullName: 'Narco' ,totalAmount:0,discount:0,tax:0 },
      { id: 13, desc: '', fullName: 'Bombasto' ,totalAmount:0,discount:0,tax:0 },
      { id: 14, desc: '', fullName: 'Celeritas' ,totalAmount:0,discount:0,tax:0 },
      { id: 15, desc: '', fullName: 'Magneta' ,totalAmount:0,discount:0,tax:0 },
      { id: 16, desc: '', fullName: 'RubberMan' ,totalAmount:0,discount:0,tax:0 },
      { id: 17, desc: '', fullName: 'Dynama' ,totalAmount:0,discount:0,tax:0 },
      { id: 18, desc: '', fullName: 'Dr IQ' ,totalAmount:0,discount:0,tax:0 },
      { id: 19, desc: '', fullName: 'Magma' ,totalAmount:0,discount:0,tax:0 },
      { id: 20, desc: '', fullName: 'Tornado' ,totalAmount:0,discount:0,tax:0 }
    ];
    return {bills};
  }
}

    
