import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [];

  constructor() { }

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }
}
