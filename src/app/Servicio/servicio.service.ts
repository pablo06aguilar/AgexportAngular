import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Colaborador } from '../Modelos/Colaborador'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { 

  }



  url='http://localhost:39339/api/Colaborador';

  getColaboradores()
  {
    return this.http.get<Colaborador[]>(this.url);
  }

  crearColaborador(colaborador:Colaborador)
  {
    return this.http.post<Colaborador>(this.url,colaborador);
  }

  getColaboradorXId(id:number)
  {
    return this.http.get<Colaborador>(this.url+"/"+id);
  }

  actualizarColaborador(colaborador:Colaborador)
  {
    return this.http.put<Colaborador>(this.url,colaborador);
  }

  EliminarColaborador(colaborador:Colaborador)
  {
    return this.http.delete<Colaborador>(this.url+"/"+colaborador.id);
  }

}
