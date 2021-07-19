import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/Modelos/Colaborador';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  colaborador:Colaborador = new Colaborador();
  constructor(private router:Router, private service:ServicioService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar()
  {
    let id=localStorage.getItem("id");
    this.service.getColaboradorXId(Number(id))
    .subscribe(data =>{
      this.colaborador=data;
    })
  }

  Actualizar(colaborador:Colaborador)
  {
    this.service.actualizarColaborador(colaborador)
    .subscribe(data =>{
      this.colaborador=data;
      alert("Colaborador actualizado con Exito!!");
      this.router.navigate(["listar"]);
    })
  }

}
