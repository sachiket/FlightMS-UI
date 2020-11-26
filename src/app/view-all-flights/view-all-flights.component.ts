import { Component, OnInit } from '@angular/core';
import { FlightService } from '../_service/flight.service';

@Component({
  selector: 'app-view-all-flights',
  templateUrl: './view-all-flights.component.html',
  styleUrls: ['./view-all-flights.component.css']
})
export class ViewAllFlightsComponent implements OnInit {

  flights:any;

  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    let list = this.flightService.viewAllFlights();
    list.subscribe((data) => this.flights = data);
  }

}
