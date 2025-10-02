//Los servicios son logica accesible desde cualquier parte de un proyecto
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //para poder hacer peticiones http, get , post, put, delete
import { Product } from '../interfaces/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
// Inyeccion de dependencias y/o directivas de angular
private _httpClient = inject(HttpClient);

//Definir la Url de acceso al backend
private apiUrl = environment.appUrl; //URL general del back

//Metodo para hacer las peticiones al backend

//Peticion Post - Crear un producto

postProduct(productToCreate: Product){
 return this._httpClient.post(this.apiUrl + 'products/crear', productToCreate); 

};
//Peticion Get - Obtener todos los productos

getProducts(){
return this._httpClient.get(this.apiUrl + 'products/mostrar');
}; 

//Peticion Put - Actualizar un producto

putProduct(productToUpdate: Product,id:string){
 return this._httpClient.put(this.apiUrl + 'products/actualizar/:id' + id, productToUpdate);

};

//Peticion Delete - Eliminar un producto

deleteProduct(id:string){
 return this._httpClient.delete(this.apiUrl + 'products/eliminar/' + id);


};

}
