// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts'; // Import ChartsModule

import { AppComponent } from './app.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutService } from './services/workout.service';
import { WorkoutChartComponent } from './workout-chart/workout-chart.component';
import { PaginationComponent } from './pagination/pagination.component'; // Ensure this path is correct

@NgModule({
  declarations: [
    AppComponent,
    WorkoutFormComponent,
    WorkoutListComponent,
    WorkoutChartComponent,
    PaginationComponent // Add this line
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule // Add ChartsModule to imports
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
