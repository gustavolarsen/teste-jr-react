# README.md

# Users List Application

This project is a simple React application that displays a list of users fetched from an API. It allows users to search for specific users by name and clear the search results.

## Project Structure

The project is organized as follows:

```
teste-jr-react
├── src
│   ├── components
│   │   ├── Header.jsx        # Renders the header section with the title
│   │   ├── SearchBar.jsx     # Contains the search input and clear button
│   │   └── UsersList.jsx     # Displays the list of users
│   ├── services
│   │   └── api.js            # Fetches user data from an API
│   ├── App.jsx               # Main application component
│   ├── App.css               # Styles for the application
│   └── index.js              # Entry point of the application
├── package.json               # npm configuration file
├── README.md                  # Documentation for the project
└── .gitignore                 # Specifies files to ignore by Git
```

## Features

- Fetches user data from an external API.
- Allows users to search for users by name.
- Provides a clear button to reset the user list.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd teste-jr-react
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## License

This project is licensed under the MIT License.