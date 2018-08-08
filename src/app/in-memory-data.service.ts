import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      let bills = [
          {
            "id":"11",
            "fullName":"Mr. Nice",
            "desc":"Mr. Nice test Desc",
            "totalAmount":"10",
            "discount":"1",
            "tax":"1",
            "items":[
                      {
                         "desc":"Test1",
                         "weight":"10",
                         "quantity":"1",
                         "carat":"24",
                         "makingCharge":"2"
                       }
                    ]
          },
          {
            "id":"12",
            "fullName":"Narco",
            "desc":"Narco Test desc",
            "totalAmount":"10",
            "discount":"1",
            "tax":"1",
            "items":[
                      {
                         "desc":"Test1",
                         "weight":"10",
                         "quantity":"1",
                         "carat":"24",
                         "makingCharge":"2"
                       },
                      {
                         "desc":"Test2",
                         "weight":"10",
                         "quantity":"1",
                         "carat":"24",
                         "makingCharge":"2"
                       }
                    ]
          }, 
          {
            "id":"13",
            "fullName":"Bombasto",
            "desc":"Bombasto Test desc",
            "totalAmount":"10",
            "discount":"1",
            "tax":"1",
            "items":[
                      {
                         "desc":"Test1",
                         "weight":"10",
                         "quantity":"1",
                         "carat":"24",
                         "makingCharge":"2"
                       },
                      {
                         "desc":"Test2",
                         "weight":"10",
                         "quantity":"1",
                         "carat":"24",
                         "makingCharge":"2"
                       }
                    ]
          },
          {
            "id":"14",
            "fullName":"Celeritas",
            "desc":"Celeritas Test desc",
            "totalAmount":"10",
            "discount":"1",
            "tax":"1",
            "items":[
                      {
                         "desc":"Test1",
                         "weight":"10",
                         "quantity":"1",
                         "carat":"24",
                         "makingCharge":"2"
                       },
                      {
                         "desc":"Test2",
                         "weight":"10",
                         "quantity":"1",
                         "carat":"24",
                         "makingCharge":"2"
                       }
                    ]
          }
      ];

    return {bills};
  }
}

    
