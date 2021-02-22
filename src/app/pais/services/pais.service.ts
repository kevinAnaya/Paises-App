import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private Apiurl:string = 'https://restcountries.eu/rest/v2/';

  constructor( private http: HttpClient) { }

  buscarPais( termino:string ): Observable<Country[]>{

    const url = `${this.Apiurl}name/${termino}`

    return this.http.get<Country[]>(url);

  }

  buscarCapital( termino: string): Observable<Country[]>{
    const url = `${this.Apiurl}capital/${termino}`

    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha( id: string): Observable<Country>{
    const url = `${this.Apiurl}alpha/${id}`

    return this.http.get<Country>(url);
  }

  BuscarRegion(region: string): Observable<Country[]>{
     const url: string = `https://restcountries.eu/rest/v2/region/${region}`
     return this.http.get<Country[]>(url);
  }

  
}
