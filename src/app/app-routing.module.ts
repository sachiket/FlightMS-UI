import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchResultsComponent } from './flight-search/flight-search-results/flight-search-results.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';


const routes: Routes = [
  {path: 'home',component: FlightSearchComponent },
  {path: 'search-result' , component:FlightSearchResultsComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
