# BPL Dream 11 Team Builder

Welcome to BPL Dream 11, a React-based application designed to let users assemble their ultimate cricket team with a limited number of coins. With this application, users can choose players based on role, bidding price, and other cricket-specific attributes, all while managing their budget and lineup size.

## Project Description

BPL Dream 11 provides a smooth, interactive experience for creating a cricket dream team. The interface is designed to guide users through the process of adding players to their team, with the ability to remove and manage selected players as well. Utilizing React and a JSON-based data file, BPL Dream 11 recreates a fantasy team selection process with a focus on budget management and player statistics.

## Technologies Used

- **React**: For building the interactive UI components.
- **React-Toastify**: For handling notifications and replacing default alerts.
- **CSS**: For styling components according to Figma designs.
- **JSON**: For storing and managing player data.

## Key Features

1. **Budget-Based Player Selection**:

   - Users can select players based on a predefined budget, displayed on the Navbar.
   - A banner button allows users to increase their budget to afford higher-priced players.

2. **Team Management**:

   - A toggle feature lets users view either “Available” players or their “Selected” team, with player details displayed on cards.
   - User notifications using React-Toastify alert users when their team size limit is reached or if they attempt to reselect a player.

3. **Interactive Player Selection and Removal**:
   - Each player card in the “Available” section has a “Choose Player” button, adding the player to the team if within budget and not already selected.
   - Users can remove players from their team using the “Remove” button on each selected player card, updating their budget accordingly.

## Application Structure

### Navbar

- Displays the user’s current coin balance, updated as players are selected and removed.

### Banner

- Features a background, title, text, and a “Claim Free Credit” button that increases the user’s coin balance.

### Main Section

- Toggle between “Available” and “Selected” players.
- Displays the list of all available players with player details, organized in a three-column card layout.

### Player Data

- Stored in a JSON file with attributes like player ID, name, country, image, role, and bidding price.

### Player Selection and Removal

- Each player card features a “Choose Player” button.
- Selection alerts include:
  - “Not enough money” if the user’s balance is insufficient.
  - “Player already selected” if the player is already in the selected list.
  - “Maximum players reached” if the team already has 6 players.
- Selected players display in a single-column layout with a “Remove” button to deselect.

### Footer and Newsletter

- Styled according to Figma designs, featuring a footer and a newsletter subscription section.

## Installation and Setup

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mozaddedalfeshani/BPL-Dream11.git
   cd BPL-Dream11
   ```
