// workout-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/workout.model';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [];
  filteredWorkouts: Workout[] = [];
  pagedWorkouts: Workout[] = [];
  searchName: string = '';
  selectedType: string = 'All';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
    this.filteredWorkouts = this.workouts.slice(); // Initialize filtered list
    this.updatePagedWorkouts();
  }

  filterWorkouts(): void {
    this.filteredWorkouts = this.workouts.filter(workout => {
      const matchesName = workout.name.toLowerCase().includes(this.searchName.toLowerCase());
      const matchesType = this.selectedType === 'All' || workout.type === this.selectedType;
      return matchesName && matchesType;
    });
    this.currentPage = 1; // Reset to first page when filtering
    this.updatePagedWorkouts();
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePagedWorkouts();
  }

  private updatePagedWorkouts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.pagedWorkouts = this.filteredWorkouts.slice(startIndex, startIndex + this.itemsPerPage);
  }
}
