
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { DbServiceService } from 'src/app/services/db.service';
import { SpinnerService } from 'src/app/services/spinner.service';
// import { CustomerList } from '../../../models/customerList.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {
	
constructor(private ds:DbServiceService,private spinner:SpinnerService,private router:Router,private route: ActivatedRoute) {
    
  }
searchStr;
  ngAfterContentInit(): void {
    this.getAllCustomers()
  }

  customers: Customer[] =[]

  ngOnInit(): void {

  }


//   searchChanged(str:string){
    // str=str.toLowerCase()
    // const arr = this.customers.filter((elem)=> {
    //   //return false for the element that matches both the name and the id
    //   return (elem.firstName.toLowerCase().includes(str) || elem.lastName.toLowerCase().includes(str) || elem.email.toLowerCase().includes(str)
    //    || elem.phoneNumber.toLowerCase().includes(str) || elem.address.toLowerCase().includes(str) || elem.notes.toLowerCase().includes(str))
    // });
    // this.customers=arr
//   }


  getAllCustomers(){
    // this.spinner.showOrHideSpinner(true)
    this.ds.getAllCustomer()
    .then(()=>{
    //   this.spinner.showOrHideSpinner(false)
    }).catch((err)=>{
      console.log(err)
    })
    this.ds.customersStatus.subscribe((arr:Customer[])=>{
      this.customers=arr
    })
  }

  showCustomer(e,customer: Customer){
      const custerId = customer.id
   this.router.navigate([ custerId],{ relativeTo: this.route });
  }

  remove(e,customer: Customer){
    const custerId = customer.id
   this.ds.removeCustomer(custerId)
    e.stopPropagation();
    
    setTimeout(() => {
      this.getAllCustomers();
    }, 1000);
  }

}