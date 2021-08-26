import { Component, OnInit } from '@angular/core';
import { OrganicrouteService } from '../organicroute.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routerobj : OrganicrouteService) { }

  ngOnInit(): void {
  }
   signIn(name: string, pass : string){
    if(name.length<3 || pass.length<3 )
    {
      alert("Field length cannot be less than 3");

    }
    else if(name==='null' || pass==='null' ){
       alert("Fields cannot be null");
    }
    else if(name=="admin" && pass=="password"){
      this.routerobj.openDashboard();
  
    }
}
}
