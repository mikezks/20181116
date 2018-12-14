import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent
  ]
})
export class FlightBookingModule { }
