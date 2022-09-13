import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35_Coponentes';
  clientes  = [{nombre: "Cliente 1", cif: "B 123", direccion: "C/ la la la", grupo: "1"},
              {nombre: "Cliente 2", cif: "A 334", direccion: "Av. lololol", grupo: "1"}];
  
  actualizarClientes (cliente : { nombre: string; cif: string; direccion: string; grupo: string; }) {
    this.clientes.push(cliente);
  }
}
