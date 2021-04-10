import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NavControlService } from 'src/app/services/nav-control.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	navBarStatus:boolean=false
  
	constructor(private ls:LoginService, private navServ:NavControlService) { }

  ngOnInit(): void {
	this.navServ.data.subscribe(data => {
      this.navBarStatus=data
    //   console.log(data)
    })
  }
   
   logOut(){
    this.ls.logOut()
  }
}
