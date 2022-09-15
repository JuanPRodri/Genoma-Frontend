import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Analisis } from './analisis';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AnalisisService {

  
  private baseUrl = "http://localhost:8080/genomaXYZ/listarAnalisis"

  constructor(private http: HttpClient) { }

  getAnalisis(): Observable<Analisis[]>{
    //console.log("hola ", this.http.get<Analisis[]>(this.baseUrl));
    return this.http.get<Analisis[]>(this.baseUrl);
  }

}
