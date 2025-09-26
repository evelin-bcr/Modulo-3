import { Component } from '@angular/core';
// Importar la case dek componente y agregarlo a los imports (en este caso es navbar)
import { Navbar } from '../../components/navbar/navbar';
@Component({
  selector: 'app-home',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

// Logica de funcionamiento de nuestro componente