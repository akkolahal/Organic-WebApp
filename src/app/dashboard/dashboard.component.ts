import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { CustomerorderService } from '../customerorder.service';
import { OrganicrouteService } from '../organicroute.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  item : Product;
  productList : Array<Product>=[];
  constructor( private custobj : CustomerorderService, private rothome : OrganicrouteService) { 
    this.item= new Product();
  }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    this.custobj.fetchProduct().subscribe(
      (res)=> 
      this.productList=res 
    )
  }
  addToList(){
    this.custobj.addProduct(this.item).subscribe(
      (res)=> this.productList.push(this.item),
      (errobj)=> alert(errobj)
    )
    this.item = new Product();
  }
  callHome(){
    this.rothome.openHome();
  }
}
