import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { DbServiceService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.css']
})
export class AddcustomersComponent implements OnInit {
   
	valForm: FormGroup

  constructor(private ds:DbServiceService,private spinner:SpinnerService,
    private route: ActivatedRoute, private spinnerService:SpinnerService) {
   }

   form:Customer=new Customer()
   id: string;
   private sub: any;
   customer:Customer
   addOrEditCustomer:string="Add customer"

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
     
      if (params['id']){
        this.id = params['id'];
        this.getCustomer(this.id)
      }
  
   });

  }

  async getCustomer(id: string){

    try {
      this.spinnerService.showOrHideSpinner(true)
      const customer = await  this.ds.getCustomer(id)
      this.spinnerService.showOrHideSpinner(false)
      if (customer){
        this.form = customer
        this.addOrEditCustomer="Edit customer"
      }
    } catch (error) {
      console.log(error)
    }
  }

  save(){
    this.spinner.showOrHideSpinner(true)
    this.ds.addCustomer(this.form).then((docRef) => {
      this.spinner.showOrHideSpinner(false)
      this.form=new Customer()
      // this.router.navigate(['../'], { relativeTo: this.route });
    })
    .catch((error) => {
        this.spinner.showOrHideSpinner(false)
        console.error("Error adding document: ", error);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}