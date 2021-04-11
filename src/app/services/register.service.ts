import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public readonly auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router, private unLogin:LoginService) { }



createUserWithEmailAndPassword(email: string, password: string){

    return new Promise(async (resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
		  alert("Now you can Login! Please don't forget your password!")
		  this.unLogin.logOut();
		 setTimeout(() => {
			  this.router.navigate(['/login'], { relativeTo: this.route });
		 }, 1000);
       
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        reject(errorMessage)
      });

  })
   
  }
	
// 	this.auth.createUserWithEmailAndPassword(email,password)
//                 .then(function(){
// alert('User Register successfully');
// 	}).catch(function(error){
//  var errorCode = error.code;
//  var errorMessage = error.message;
//  return errorMessage
// 	})




}
