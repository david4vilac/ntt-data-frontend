import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from '@models/cliente/response.model';
import { environment } from '@src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseURL = `${environment.apiUrlBase}/cliente`;
  constructor( private _http: HttpClient ) {

   }

  public getAllClients(){
    return this._http.get<IResponse>(`${this.baseURL}/getAll`)
  }


  public listarPorId(id: number, tipoDocumento: string ): Observable<IResponse> {
    return this._http.get<IResponse>(`${this.baseURL}/listarPorId/${tipoDocumento}/${id}`);
  }
}
