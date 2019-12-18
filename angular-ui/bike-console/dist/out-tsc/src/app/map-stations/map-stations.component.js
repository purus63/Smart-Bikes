import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
let MapStationsComponent = class MapStationsComponent {
    constructor() { }
    ngOnInit() {
        Object.getOwnPropertyDescriptor(mapboxgl, "accessToken")
            .set('pk.eyJ1Ijoic2F1cmFiaGJhZ2FkZSIsImEiOiJjazJ3eWcyajAwa3F4M3FvOXNkcXZsd2ljIn0.YeODOTRRyp6SDwFNMH-Xvg');
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/saurabhbagade/ck40xqv690ecg1cpglgfvr4yp',
            center: [77.630, 12.928],
            zoom: 10.5 // starting zoom
        });
        map.on('click', function (e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['bool-stationsv2'] // replace this with the name of the layer
            });
            if (!features.length) {
                return;
            }
            var feature = features["0"];
            console.log(feature);
            var popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
                .addTo(map);
        });
    }
};
MapStationsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-map-stations',
        templateUrl: './map-stations.component.html',
        styleUrls: ['./map-stations.component.css']
    })
], MapStationsComponent);
export { MapStationsComponent };
//# sourceMappingURL=map-stations.component.js.map