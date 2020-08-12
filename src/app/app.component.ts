import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Produc-app';
  constructor(private route:Router){}
  listar(){
    this.route.navigate(["listar"])
  }
  nuevo(){
    this.route.navigate(["add"])
  }
}
