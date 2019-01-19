import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

const routes: Routes = [
  {
    path: 'flight-booking',
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-edit',
        component: FlightEditComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightBookingRoutingModule { }
