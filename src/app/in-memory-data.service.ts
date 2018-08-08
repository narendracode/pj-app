import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bills = [
      { id: 11, desc: 'Mr. Nice test Desc', fullName: 'Mr. Nice' ,totalAmount:0,discount:0,tax:0 },
      { id: 12, desc: 'Narco Test desc', fullName: 'Narco' ,totalAmount:0,discount:0,tax:0 },
      { id: 13, desc: 'Bombasto Test desc', fullName: 'Bombasto' ,totalAmount:0,discount:0,tax:0 },
      { id: 14, desc: 'Celeritas test desc', fullName: 'Celeritas' ,totalAmount:0,discount:0,tax:0 },
      { id: 15, desc: 'Magneta test desc', fullName: 'Magneta' ,totalAmount:0,discount:0,tax:0 },
      { id: 16, desc: 'RubberMan test desc', fullName: 'RubberMan' ,totalAmount:0,discount:0,tax:0 },
      { id: 17, desc: 'Dynama test desc', fullName: 'Dynama' ,totalAmount:0,discount:0,tax:0 },
      { id: 18, desc: 'Dr IQ test desc', fullName: 'Dr IQ' ,totalAmount:0,discount:0,tax:0 },
      { id: 19, desc: 'Magma test desc', fullName: 'Magma' ,totalAmount:0,discount:0,tax:0 },
      { id: 20, desc: 'Tornado test desc', fullName: 'Tornado' ,totalAmount:0,discount:0,tax:0 }
    ];
    return {bills};
  }
}

    
