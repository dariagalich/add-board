import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const api = 'https://geocode-maps.yandex.ru/1.x/?apikey=f0f112df-dfe1-4d79-8e45-d885e77a66e5&geocode='

interface Map{
  addressCoordinate: string
  street: string
  city: string
}

@Injectable({
  providedIn: 'root'
})

export class GeocoderService {

  mapData: Map = {
    addressCoordinate: '',
    street: '',
    city: ''
  };

  constructor(
   private http: HttpClient
  ) {
  }

  getAddressCoordinates(address:string){
    this.http.get<any>(api + address + '&format=json').subscribe(response => {
      this.mapData.addressCoordinate = response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
      this.mapData.street = response.response.GeoObjectCollection.featureMember[0].GeoObject.name
      this.mapData.city = response.response.GeoObjectCollection.featureMember[0].GeoObject.description
    })
  }

  setAddressCoordinates(){
    return this.mapData
  }
}
