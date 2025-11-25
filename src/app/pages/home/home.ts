import { Component} from '@angular/core';
// 1. Importar la clase del componente y agregarlo a los imports
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

// Lógica de funcionamiento de nuestro componente


  


}