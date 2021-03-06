import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Graz';
  to: string = 'Hamburg';
  flights: Flight[] = [];
  selectedFlight: Flight;

  basket: object = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights = this.flightService.flights;
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => {
          this.flights = flights;
        },
        err => {
          console.error('Error loading flights', err);
        }
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
