import {Component, OnInit} from '@angular/core';
import {GeocoderService} from "../../services/geocoder.service";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  // coordinates = this.geocoderService.setAddressCoordinates()
  arrayCoordinates : any
  dataLocation = this.geocoderService.setAddressCoordinates()

  constructor(
    private geocoderService: GeocoderService
  ) {
  }

  ngOnInit() {
    // console.log(this.coordinates.split(' '))
    this.arrayCoordinates = this.dataLocation.addressCoordinate.split(' ')
    this.initMap()
  }

  async initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    // @ts-ignore
    await ymaps3.ready;
    // @ts-ignore
    const {YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer} = ymaps3;

    // @ts-ignore
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1')
    // Иницилиазируем карту
    const map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById('map'),

      // Передаём параметры инициализации карты
      {
        location: {
          // Координаты центра карты
          center: [33.445302, 44.580174],

          // Уровень масштабирования
          zoom: 10
        }
      }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    map.addChild(new YMapDefaultMarker({
      coordinates: this.arrayCoordinates,
      title: this.dataLocation.street,
      subtitle: this.dataLocation.city,
      color: '#49516F'
    }));

  }

  icon(props: any) {
    const circle = document.createElement('div');
    circle.classList.add('icon');
    circle.style.color = props.color;
    circle.style.backgroundImage = `url(${props.icon})`;
    circle.style.setProperty('--size', props.size);

    if (props.title) {
      const title = document.createElement('div');
      title.innerHTML = props.title;
      title.className = 'icon-title';
      circle.appendChild(title);
    }
  }
}
