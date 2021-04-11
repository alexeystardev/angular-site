import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public readonly auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

registerUser(email,password){
	this.auth.createUserWithEmailAndPassword(email,password)
                .then(function(){
alert('User Register successfully');
	}).catch(function(error){
let errorCode=error.code;
let errorMsg=error.message;
	})
}
}




