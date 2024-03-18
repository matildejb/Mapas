import { Component, signal } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-mapas',
  standalone: true,
  imports: [GoogleMap, MapMarker],
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent {
  myPosition = signal<any>(""); 

  ngOnInit(){
    navigator.geolocation.getCurrentPosition( position => {
      let center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
      this.myPosition.set(center)
    })
  }

}
