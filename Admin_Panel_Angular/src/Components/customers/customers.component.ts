import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [HttpClientModule],
  providers:[CustomersService],
  templateUrl: './customers.component.html',
  styles: ``
})
export class CustomersComponent {
  constructor(private CustServ:CustomersService){}
  Customers:any = [];
  ngOnInit(): void {
    this.CustServ.getAllCustomers().subscribe({
      next:(data)=>{
        this.Customers = data;
      },
      error:(err)=>{console.log(err)}
    })
  }



}
