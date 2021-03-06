import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { NavControlService } from './nav-control.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public readonly auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,private navServ: NavControlService ) { }

  user:any=null

  loginWithEmailPassword(email: string, password: string){

    return new Promise(async (resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.router.navigate(['dashboard'], { relativeTo: this.route });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        reject(errorMessage)
      });

      // try {
      //   const user=await this.auth.signInWithEmailAndPassword(email, password)
      // } catch (error) {
      //   var errorMessage = error.message;
      //   reject(errorMessage)
      // }


    })
   
  }

  checkIfUserLogin():Promise<boolean>{
    return new Promise(async (resolve, reject) => {
            if (this.user) {
              resolve(true)
              return
            }
            this.auth.onAuthStateChanged((user) => {
              if (user) {
                // console.log(user)
                this.user=user
				this.navServ.showNavBar()
                resolve(true)
              } else {
                this.user=null
				this.navServ.hideNavBar()
                this.router.navigate(['home'], { relativeTo: this.route });
                resolve(false)
              }
            });
    })
    

    
    
  }

  // checkIfUserLoginV2(){
  //   var user = this.auth.currentUser;

  //   if (user) {
  //     console.log(user)
  //   } else {
  //     // No user is signed in.
  //     console.log("No user")
  //   }

  // }



  logOut(){
    this.auth.signOut()
  }


///////////////////////////////////////
// firebaseAuth.createUserWithEmailAndPassword(userEmail,userPassword)
//                 .addOnCompleteListener(SignupActivity.this, new OnCompleteListener<AuthResult>() {
//                     @Override
//                     public void onComplete(@NonNull Task<AuthResult> task) {
//                         Log.d(TAG, "New user registration: " + task.isSuccessful());

//                         if (!task.isSuccessful()) {
//                             SignupActivity.this.showToast("Authentication failed. " + task.getException());
//                         } else {
//                             SignupActivity.this.startActivity(new Intent(SignupActivity.this, MainActivity.class));
//                             SignupActivity.this.finish();
//                         }
//                     }
//                 });



}