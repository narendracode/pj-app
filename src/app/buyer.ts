export class Buyer {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  company: string;
  address: string;
  phone: string;
  email: string;
  status: number;
  createdAt: string;
  updatedAt: string;
  
  constructor(
  firstName: string,
  middleName: string,
  lastName: string,
  company: string,
  address: string,
  phone: string,
  email: string
  ){
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
      this.company = company;
      this.address = address;
      this.phone = phone;
      this.email = email;
    }

}
