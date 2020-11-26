import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightSearchResultsComponent } from './flight-search/flight-search-results/flight-search-results.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewAllFlightsComponent } from './view-all-flights/view-all-flights.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightSearchResultsComponent,
    NavBarComponent,
    ViewAllFlightsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
