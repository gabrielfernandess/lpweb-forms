import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Vingador} from '../vingador';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input()
  novo: Vingador;

  @Output()
  onCadastrar = new EventEmitter<Vingador>();

 

  constructor() { }

  ngOnInit() {
  }


  cadastrar(vingador: Vingador): void {
    this.onCadastrar.emit(this.novo);
  }
}
