# Battleship-game

A classic Battleship game built with HTML, CSS, and vanilla JavaScript, focused on clean architecture and state-driven UI rendering.

# Features

-Human vs Computer gameplay
-Random ship placement
-Hit, miss, and sunk ship detection
-Visual feedback for hits and sunk ships
-Win / lose modal
-Restartable game flow

# Architecture
-Ship – tracks length, hits, sunk state, and occupied cells
-Gameboard – manages the board and attacks
-Player – handles attacks
-Game – controls turns and game flow
-DOM layer – renders UI based on game state only

# Stack
-HTML
-CSS
-JavaScript (ES6 modules)

# Future Improvements
-Smarter AI
-Drag & drop ship placement