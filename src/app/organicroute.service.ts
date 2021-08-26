import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrganicrouteService {

  constructor(private routobj : Router) { }

  openLogin(){
    this.routobj.navigate(['login']);
  }

  openDashboard(){
    this.routobj.navigate(['dashboard']);
  }
  openHome(){
    this.routobj.navigate(['home']);
  }

  goBack(){
    this.routobj.navigate(['home']);
  }
}
