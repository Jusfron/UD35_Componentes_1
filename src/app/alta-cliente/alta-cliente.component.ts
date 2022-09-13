import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  @Output() clienteOutput = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  enviarCliente(nombre: string, cif: string, direccion: string, grupo: string) {
    let cliente = {nombre, cif, direccion, grupo};
    this.clienteOutput.emit(cliente);
  }

}
