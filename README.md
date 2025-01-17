# Betsson Sports Dashboard

This is an interactive sports betting statistics dashboard built with Angular 17, featuring interactive charts using ECharts. The dashboard is designed to display key metrics and data for monitoring sports betting activities, with a focus on clear and concise visualizations.

## Application Link

[Access the live application](https://betsson-sports-dashboard-34sg.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Run the Project](#how-to-run-the-project)
- [How to Contribute](#how-to-contribute)

## Overview

The dashboard displays interactive charts to provide a detailed view of metrics related to sports betting. The visualizations include:

- **Monthly Bet Overview**
- **Bet Distribution**
- **User Growth Over Time**
- **Top Betting Countries**
- **Popular Sports Breakdown**

These charts are powered by mock data and displayed interactively using ECharts for easy data analysis.

## Features

- **Interactive Visualizations**: The dashboard includes several charts for data analysis.
- **Responsiveness**: The dashboard layout adapts seamlessly to different screen sizes (desktops, tablets, and mobile devices).
- **Chart Cards**: Each chart is presented within an elevated card for a clean and modern appearance.
- **Future Enhancements**: The dashboard is ready to integrate with real data via a RESTful API, enabling dynamic metric updates.

## Technologies Used

- **Angular 17**: Front-end framework for building the Single Page Application (SPA).
- **ECharts**: Library for creating interactive charts.
- **SCSS**: CSS preprocessor for flexible and modular design.
- **RxJS**: Library for reactive programming and handling asynchronous data streams.

## Project Structure

The project follows principles of modularity and clean code organization. Below is the main directory structure:

- **Components**:
  - **Header**: Displays the header with the title and navigation.
  - **Stats**: Contains the statistical charts and data display logic.
  - **AppComponent**: The main component that organizes the different pages of the dashboard.

## How to Run the Project

### Prerequisites

Make sure you have Node.js installed on your machine. It is recommended to use the LTS (Long Term Support) version.

Install Angular CLI globally if not already installed:

npm install -g @angular/cli

### Installation

## Clone the repository:

git clone https://github.com/EuderAlves/betsson-sports-dashboard.git

## Navigate to the project folde:

cd betsson-sports-dashboard

## Install the dependencies:

npm install

## Running the Project

To run the project locally, use the following command:

ng serve

## The application will be available at:

http://localhost:4200.

### How to Contribute

Contributions are always welcome! If you'd like to contribute to the project, follow the steps below:

## Fork this repository.

Create a new branch for your feature or bug fix:

git checkout -b my-feature

## Make your changes and commit:

git commit -am 'Add new feature'

## Push to the remote repository:

git push origin my-feature

## Open a pull request on GitHub.

Let me know so I can review your pull request!
