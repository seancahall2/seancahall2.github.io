import { environment } from '../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/satellite-streets-v12';
  lat = 40.6997149605;
  lng = 14.4924824587;

  constructor() { }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      container: 'map',
      accessToken: environment.mapbox.accessToken,
      style: this.style,
      zoom: 1,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.on('load', () => {
      if (this.map) {
        this.map.resize();
        this.zoomIn();
      }
    });
  }

  zoomIn() {

    if (this.map) {
      this.map.easeTo({
        center: [this.lng, this.lat],
        zoom: 17,
        // @ts-expect-error: Unreachable code error
        speed: 0.2,
        curve: 1,
        duration: 4000,
        easing(t) {
          return t;
        }
      });
    }
  }

}