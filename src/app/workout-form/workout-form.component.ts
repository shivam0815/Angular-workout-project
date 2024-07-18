import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {
  workoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.workoutForm = this.fb.group({
      name: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      type: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSubmit(): void {
    if (this.workoutForm.valid) {
      console.log('Workout submitted', this.workoutForm.value);
      // Add your form submission logic here
      alert("form successfully submitted");
    }
  }
}
