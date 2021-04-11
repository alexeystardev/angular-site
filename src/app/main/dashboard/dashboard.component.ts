import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userEmail;
  constructor(private loginServ:LoginService) { }

  ngOnInit(): void {
	this.userEmail= this.loginServ.user.email
  }


}
