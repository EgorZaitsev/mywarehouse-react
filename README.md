# To-Do List App

This is a simple To-Do List application built with React. It fetches user data and their to-dos from a public API and
displays it in a responsive table. The app is designed responsive and adaptive.

## Features

- Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
- Displays users along with their to-do count.
- Responsive design that adapts to different screen sizes.
- Error handling and loading state management.
- Simple, clean UI.

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces.
- **CSS Modules**: For scoping and organizing styles.
- **TypeScript**: For type safety and better code maintainability.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EgorZaitsev/mywarehouse-react.git
   cd todo-list-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   This will start the app locally at [http://localhost:5173](http://localhost:5173).

## How It Works

1. **Data Fetching**:
    - When the app loads, it fetches user data and to-do items from
      the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).
    - The app then calculates the number of to-dos assigned to each user.

2. **Table Display**:
    - The app renders a table where each row represents a user.
    - Each user row contains:
        - User ID
        - User name
        - Email
        - The count of to-dos assigned to the user.

3. **Error Handling**:
    - The app displays a loading state while fetching data.
    - If there is an error fetching data, an error message is displayed.
    - If no data is available, a message will notify the user.
    - ErrorBoundary in app root, to catch errors typescript errors.

