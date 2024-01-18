
## Description - World Travel Tracker

World Travel Tracker is a web application that allows users to track and visualize their visited countries on a map.

## Demo

Visit: https://world-travel-tracker-418t21xng-rushikeshhirves-projects.vercel.app/

## Getting Started

1. Clone the repository.
   ```bash
   git clone https://github.com/rushikeshhirve/worldTravelTracker
2. Install dependencies with `npm install` or `npm i`.
   ```bash
   npm install
3. Set up the PostgreSQL database: 
 - Download and install PostgreSQL.
 - Create the necessary tables using the queries in            postgreQueries.sql.

4. Run the application with `npm start`. Visit http://localhost:3000 in your browser.

## Technologies Used

- **Express:** A web application framework for Node.js that simplifies the process of building robust web applications.
- **body-parser:** Middleware for handling HTTP POST requests, making it easier to extract data from the request body.
- **pg (PostgreSQL):** A PostgreSQL client for Node.js that enables interaction with PostgreSQL databases.

## Usage

1. Open the application in your web browser.
2. Enter the name of a visited country in the input field.
3. Submit the form, and the visited country will be highlighted on the map.
4. The total number of visited countries and their names will be displayed at the bottom of the page.

## Features

- Display a map highlighting the visited countries.
- Input field to enter the name of a visited country, and upon submission, the country is highlighted on the map.
- Show the total number of visited countries and list their names at the bottom of the page.
- Built with Node.js, Express, and PostgreSQL.
