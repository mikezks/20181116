import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityValidatorDirective } from './validators/city-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CityPipe,
    CityValidatorDirective
  ],
  exports: [
    CityPipe,
    CityValidatorDirective,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
