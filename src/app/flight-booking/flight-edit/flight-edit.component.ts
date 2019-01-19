import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateCity } from '../../shared/validators/city-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {
  id: string;
  showDetails: boolean;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this.showDetails = params['showDetails'];
      });

    this.editForm = this.fb.group({
      id: [1],
      from: [
        'Wien',
        [
          Validators.required,
          Validators.minLength(3),
          validateCity
        ]
      ],
      to: [],
      date: []
    });

    console.log('Value', this.editForm.value);
    console.log('Valid', this.editForm.valid);
    console.log('Dirty', this.editForm.dirty);
    console.log('Touched', this.editForm.touched);

    this.editForm.valueChanges
      .subscribe(value =>
        console.log('edit form changes', value)
      );
  }

}
