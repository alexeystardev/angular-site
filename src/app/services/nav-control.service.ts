import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavControlService {

	navBarStat:boolean=false
  private showNavbar = new BehaviorSubject<boolean>(this.navBarStat);
  data = this.showNavbar.asObservable();

  constructor() { }

  hideNavBar(){
    this.showNavbar.next(false)
  }

  showNavBar(){
    this.showNavbar.next(true)
  }
}