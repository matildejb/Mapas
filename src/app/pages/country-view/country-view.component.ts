import { DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/icountry.interface';

@Component({
  selector: 'app-country-view',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-view.component.html',
  styleUrl: './country-view.component.css'
})
export class CountryViewComponent {
  activatedRoute = inject(ActivatedRoute)
  countriesServices = inject(CountriesService)
  country!: ICountry

  ngOnInit(){
    this.activatedRoute.params.subscribe(async (params: any) => {
      let cca2 = params.code
      let response = await this.countriesServices.getByCode(cca2)
      console.log(response) // me llega un array de una sola posicion tengo que   coger la posicion 0
      this.country = response[0]
    })
  }

}
