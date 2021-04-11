import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	form: FormGroup

  constructor(private regServ: RegisterService) { }

  ngOnInit(): void {
	  this.form = new FormGroup({
		  email: new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
		  name: new FormControl(null, [Validators.required, Validators.minLength(2),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]),
		  password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
		//   checkbox: new FormControl(false, Validators.requiredTrue)
	  })
  }

		onSubmit(form){
			// console.log(form)
		}


  errorMessage=''

registerUser(email,password){
	this.regServ.createUserWithEmailAndPassword(email,password).catch((err)=>{
      this.errorMessage=err
    })
}
}




