import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../../Service/service.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
 
  productos:Producto[];
  constructor(private service:ServiceService,private route:Router) { }

  ngOnInit(): void {
    this.listarproductos();
  }
  listarproductos(){
    this.service.getlistarProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

}
