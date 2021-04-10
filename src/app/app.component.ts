import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { NavControlService } from './services/nav-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main-project';
  constructor( private ls:LoginService) { }

 async ngOnInit(): Promise<void> {
	await this.ls.checkIfUserLogin();
}
  }
