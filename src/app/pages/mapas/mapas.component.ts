import { Component, QueryList, ViewChild, inject, signal } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ICountry } from '../../interfaces/icountry.interface';
import { CountriesService } from '../../services/countries.service';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mapas',
  standalone: true,
  imports: [GoogleMap, MapMarker, MapInfoWindow, DecimalPipe, RouterLink],
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent {
  myPosition = signal<any>(""); 
  arrCountries : ICountry[] =[]
  countriesService = inject(CountriesService)

 async ngOnInit(){
    navigator.geolocation.getCurrentPosition( position => {
      let center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
      this.myPosition.set(center)
    })

    let response = await this.countriesService.getAll()
    this.arrCountries = response;
  }

  getPosition(latlng: any){
   return new google.maps.LatLng(latlng[0], latlng[1])
  }

  openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow){
    infoWindow.open(marker)
  }

}
