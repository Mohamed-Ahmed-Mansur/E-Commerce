import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private DB_Customers_URL = "http://localhost:3000/customers" ;

  constructor(private http:HttpClient) { }

  getAllCustomers(){
    return this.http.get(this.DB_Customers_URL);
  }
  AddCustomer(customer:any){
    return this.http.post(this.DB_Customers_URL,customer);
  }
}
