# BPL Dream 11 Team Builder

Welcome to **BPL Dream 11**, a React-based application designed to let users assemble their ultimate cricket team within a budget. Users can select players based on roles, bidding prices, and other cricket-specific attributes, all while managing a limited number of coins.

### Live Link

Access the app here: [BPL Dream 11](https://bpldream11web.netlify.app/)

## Project Description

BPL Dream 11 provides an interactive experience for creating a fantasy cricket team. The interface guides users through adding players to their team, with features for removing and managing selected players. This app recreates a fantasy team selection process with a focus on budget management and player statistics.

## Technologies Used

- **React**: For building the interactive UI components.
- **React-Toastify**: For handling notifications.
- **CSS**: For styling according to Figma designs.
- **JSON**: For managing player data.

## Key Features

### 1. Budget-Based Player Selection

- Users can select players based on a predefined budget, displayed on the Navbar.
- A "Claim Free Credit" button allows users to increase their coin balance to afford higher-priced players.

### 2. Team Management

- Users can toggle between “Available” and “Selected” players, with player details displayed on cards.
- Notifications using React-Toastify alert users of team limits, duplicate selections, or insufficient funds.

### 3. Interactive Player Selection and Removal

- Each player card has a “Choose Player” button to add them to the team if within budget and not already selected.
- Users can remove players from their team, updating their budget accordingly.

## Application Structure

### Navbar

- Displays the user’s current coin balance, updated as players are selected and removed.

### Banner

- Features a background, title, text, and a “Claim Free Credit” button that increases the user’s coin balance.

### Main Section

- Users can toggle between viewing “Available” and “Selected” players.
- Displays available players in a three-column card layout with player details.

### Player Data

- Stored in a JSON file with attributes such as player ID, name, country, image, role, and bidding price.

### Player Selection and Removal Alerts

- “Not enough money” if the user’s balance is insufficient.
- “Player already selected” if the player is already in the selected list.
- “Maximum players reached” if the team already has 6 players.

### Footer and Newsletter

- Styled according to Figma designs, featuring a footer and a newsletter subscription section.

## Installation and Setup

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mozaddedalfeshani/BPL-Dream11.git
   cd BPL-Dream11
   ```
