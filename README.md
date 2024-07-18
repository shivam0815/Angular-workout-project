# Angular-workout-project

Workout Tracking Application
Overview

This Angular application allows users to track their workouts, add new workouts, filter by type, search by username, and display results with pagination. It utilizes Angular forms for input handling and localStorage for data persistence.

Features

Add User and Workouts: Input fields to add user details, workout type, and minutes with a submission button.
Display Data: Users and their workouts are displayed in a table grid.
Search and Filter: Options to search by username and filter by workout type.
Pagination: Navigate through the list of users and workouts with pagination controls.
Technologies Used
Angular: Front-end framework for building the application.
HTML/CSS: Structuring and styling the user interface.
TypeScript: Programming language for Angular development.
localStorage: Browser storage for persisting user and workout data.
Jest: Unit testing framework for testing components and services.
Installation
To run the application locally, follow these steps:

Clone the repository:


Copy code

1.git clone <repository-url>

2.cd workout-app

Install dependencies:


Copy code
1.npm install.

2.Run the application:

Copy code
ng serve

Navigate to http://localhost:4200/ in your browser.

Usage
Add a New User and Workout:

Enter the user's name, workout type, and minutes.
Click on the "Add Workout" button to save the workout.
View and Filter Workouts:

Use the search box to find workouts by username.

Use the dropdown filter to display workouts by type.

Pagination:

Navigate through the list of users and workouts using pagination controls.

Testing

Unit Tests

WorkoutService:

Tests adding workouts and retrieving stored workouts.

WorkoutListComponent:

1.Tests displaying users and workouts.

2.Tests filtering workouts by username.

3.To run tests and view code coverage:


Copy code

1.ng test --code-coverage

2.Open coverage/index.html to view the detailed code coverage report.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements

This project was developed as part of an assignment for [Fyle].
