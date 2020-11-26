import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchResultsComponent } from './flight-search/flight-search-results/flight-search-results.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { ViewAllFlightsComponent } from './view-all-flights/view-all-flights.component';


const routes: Routes = [
  {path: 'home',component: FlightSearchComponent },
  {path: 'search-result' , component:FlightSearchResultsComponent},
  {path: 'view-all', component: ViewAllFlightsComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
