# Blackoffer Dashboard backend (node.js)

# Node.js Project README

This is a Node.js project that utilizes the Express framework to create a server and handle various routes. The project includes the following routes:

## Routes

### `/dashboard`
- Method: GET
- Description: Retrieves all data for the dashboard.
- Controller: `dataController.getAllData`

### `/data`
- Method: GET
- Description: Retrieves summary data.
- Controller: `dataController.allSummary`

### `/pie`
- Method: GET
- Description: Retrieves pie chart data.
- Controller: `dataController.pieChartData`

### `/line`
- Method: GET
- Description: Retrieves line chart data.
- Controller: `dataController.lineChartData`

### `/year-summary`
- Method: GET
- Description: Retrieves summary data for a specific year.
- Controller: `dataController.yearSummary`

### `/unique`
- Method: GET
- Description: Retrieves unique data.
- Controller: `dataController.uniqueData`

## How to run

1. ### Clone this repository.
  ```
  git clone https://github.com/henishpatel9045/blackoffer-dashboard-backend.git
  ```
2. ### Install dependencies
    ```
    npm i
    ```
    OR 
    ```
    yarn
    ```
3. ### Setup database
  Create database and update it's url in server.js

4. ### Run the app
  ```
  node server.js
  ```
  OR
  ```
  yarn dev
  ```
  OR 
  ```
  npm run dev
  ```

## Dependencies
This project relies on the following dependencies:

- Express: A fast and minimalist web framework for Node.js.
- Other dependencies used by the project can be found in the `package.json` file.

Please ensure that you have these dependencies installed before running the project.
