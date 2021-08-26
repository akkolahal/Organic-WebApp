import { Component, OnInit } from '@angular/core';
import { OrganicrouteService } from '../organicroute.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routobj : OrganicrouteService) { }

  ngOnInit(): void {
  }
  callLogin(){
     this.routobj.openLogin();
  }
  callHome(){
    this.routobj.openHome();
  }
}
