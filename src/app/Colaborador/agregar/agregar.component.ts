import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/Modelos/Colaborador';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router, private service:ServicioService) { }

  ngOnInit(): void {
  }

  modelColaborador:Colaborador = new Colaborador();

  Guardar(colaborador:Colaborador)
  {
    this.service.crearColaborador(colaborador)
    .subscribe(data =>{
      alert("Colaborador agregado con Exito!!");
      this.router.navigate(["listar"]);
    })
  }

}
