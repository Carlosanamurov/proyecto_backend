import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Producto} from '../Modelo/Producto';
import {ListarComponent} from '../Producto/listar/listar.component';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url='http://localhost:9090/productos'
  constructor(private http:HttpClient) { }
  getlistarProductos(){
    return this.http.get<Producto[]>(this.url+'/productoall');
  }
  createProducto(producto:Producto){
    return this.http.post(this.url+'/newproducto',producto); 
  }
  
}
