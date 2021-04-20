import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { CustomerList } from '../../../models/customerList.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
	customers: CustomerList[];

	
  constructor(private custServ: CustomersService) { }

  ngOnInit(): void {
	 this.custServ.getCustomersList().subscribe(customers => {
		 console.log(customers);
		 this.customers=customers
		customers.forEach(customer => console.log('customers loaded'));
	 });
  }

deleteCustomer(event, customer){
	this.custServ.deleteCustomer(customer);
}
}
