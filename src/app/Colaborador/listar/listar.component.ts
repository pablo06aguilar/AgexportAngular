import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/Modelos/Colaborador';
import { ServicioService } from '../../Servicio/servicio.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  colaboradores:Colaborador[] = [];
  constructor(private service:ServicioService, private router:Router) { }

  ngOnInit(): void {
    this.service.getColaboradores()
    .subscribe(data => {
      this.colaboradores=data;
    })
  }

  Editar(colaborador:Colaborador):void
  {
    localStorage.setItem("id",colaborador.id.toString());
    this.router.navigate(["editar"]);
  }

  Eliminar(colaborador:Colaborador)
  {
    this.service.EliminarColaborador(colaborador)
    .subscribe(data =>{
      this.colaboradores = this.colaboradores.filter(x => x !== colaborador);
      alert("Colaborador eliminado!!");
    })
  }

}
