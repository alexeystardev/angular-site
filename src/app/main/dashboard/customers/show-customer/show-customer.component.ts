import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { DbServiceService } from 'src/app/services/db.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {
 customer: Customer;

  constructor(private route: ActivatedRoute,private ds:DbServiceService, private spinnerService:SpinnerService) { }

  id: string;
  private sub: any;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
     
   });
   this.getCustomer(this.id)
  }

  async getCustomer(id: string){

  try {
    this.spinnerService.showOrHideSpinner(true)
    const customer = await  this.ds.getCustomer(id)
    this.spinnerService.showOrHideSpinner(false)
    if (customer){
      this.customer = customer
      console.log(customer)
    }
  } catch (error) {
    console.log(error)
  }

}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}