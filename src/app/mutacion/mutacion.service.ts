import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Mutacion } from './mutacion';
import { AnalisisDto } from './dto/analisisDto';

@Injectable({
  providedIn: 'root'
})
export class MutacionService {

  private baseUrl = "http://localhost:8080/genomaXYZ/analizar"

  constructor(private http: HttpClient) { }



  evaluarAdn(analizar: AnalisisDto):Observable<Mutacion>{
    return this.http.post<Mutacion>(this.baseUrl, analizar);
  }

}
