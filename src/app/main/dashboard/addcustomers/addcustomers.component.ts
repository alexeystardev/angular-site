import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { DbServiceService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.css']
})
export class AddcustomersComponent implements OnInit {
   
	valForm: FormGroup

  constructor(private ds:DbServiceService, private router: Router, private route: ActivatedRoute ) {
   }

   form:Customer=new Customer()
 

  ngOnInit(): void {
    console.log(this.form)

	//  this.valForm = new FormGroup({
	// 	  email: new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
	// 	//   password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
	//   })
  }
onSubmit(){
			// console.log(form)
		}

  save(){
    console.log(this.form)
    this.ds.addCustomer(this.form)
	this.router.navigate(['../customers'], { relativeTo: this.route });
  }
}
