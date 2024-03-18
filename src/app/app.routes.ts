import { Routes } from '@angular/router';
import { MapasComponent } from './pages/mapas/mapas.component';
import { CountryViewComponent } from './pages/country-view/country-view.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "mapa" },
    { path: "mapa", component: MapasComponent},
    { path: "country/:code", component: CountryViewComponent},
];
