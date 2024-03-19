import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICountry } from '../interfaces/icountry.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private httpClient = inject(HttpClient)
  private baseUrl: string = "https://restcountries.com/v3.1/"

 getAll( region = "europe" ): Promise<ICountry[]>{
  return lastValueFrom(this.httpClient.get<ICountry[]>(`${this.baseUrl}region/${region}`))
  
 }

 getByCode(code: string): Promise<ICountry[]>{
  return lastValueFrom(this.httpClient.get<ICountry[]>(`${this.baseUrl}alpha/${code}`))
 }
}
