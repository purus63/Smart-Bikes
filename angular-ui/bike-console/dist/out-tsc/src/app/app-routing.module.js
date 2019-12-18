import * as tslib_1 from "tslib";
import { ConsoleRegComponent } from './console-reg/console-reg.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RoutingComponent } from './routing/routing.component';
import { BikeFormComponent } from './bike-form/bike-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MapStationsComponent } from './map-stations/map-stations.component';
import { MapNavigationComponent } from './map-navigation/map-navigation.component';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: '/user-form', pathMatch: 'full' },
    // { path: 'map/:userLocationObject', component: MapComponent,canActivate:[AuthGaurdService]},
    // { path: 'map-navigation/:locationData', component: MapNavigationComponent,canActivate:[AuthGaurdService]},
    // { path: 'routing/:locationData', component: RoutingComponent,canActivate:[AuthGaurdService]},
    // { path: 'invoice/:invoiceObject', component: InvoiceComponent, canActivate:[AuthGaurdService]},
    // { path: 'user-location', component: UserLocationComponent, canActivate:[AuthGaurdService] },
    { path: 'map/:userLocationObject', component: MapComponent },
    { path: 'map-navigation/:locationData', component: MapNavigationComponent },
    { path: 'routing/:locationData', component: RoutingComponent },
    { path: 'invoice/:invoiceObject', component: InvoiceComponent },
    { path: 'user-location', component: UserLocationComponent },
    { path: 'map-stations', component: MapStationsComponent },
    { path: 'user-form', component: UserFormComponent },
    { path: 'bike-form', component: BikeFormComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { useHash: true })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
export const routingComponents = [MapComponent, MapNavigationComponent, MapStationsComponent,
    UserFormComponent, BikeFormComponent, RoutingComponent, InvoiceComponent, UserLocationComponent,
    ConsoleRegComponent];
//# sourceMappingURL=app-routing.module.js.map