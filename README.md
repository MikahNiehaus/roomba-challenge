# Roomba

**My task was to build a virtual roomba**

**Task specifications**

The sample input gives you the room dimensions, initial location of the roomba, the dirt locations, and the driving instructions. The dimensions and locations are arrays with the first number being the x coordinate and the second number being the y coordinate. For example, given room dimensions [5, 10] the room would be 5 units wide and 10 units high. 
The driving instructions are given as North, South, East, and West. So, if the roomba’s current position is (1, 2) and the next driving instruction to process is “N” then the roomba’s final position for that step would be (1, 3). The roomba can’t navigate outside of the room dimensions. 
If the driving instruction results in the roomba hitting a wal the roomba should not move from its current location and the total wal hits should be incremented by 1. For example, if the roomba’s current location is (1, 0) and the next driving instruction is “S”, then the roomba’s final position for that step would stil be (1, 0) and the total wal hits would be incremented by 1. 
After processing al the driving instructions, print out the final location of the roomba, the total distance traveled, the total amount of dirt col ected, and the total number of times it ran into a wal . 


## Tech Stack

React JS, Jest, Sinon, Enzyme.


## Installation

- Run 'git clone https://github.com/blackgraywolf/roomba-challenge' in your terminal
- Run 'cd roomba-challenge'
- Run 'npm install'
- Run 'npm start'

## Test

- Run 'npm test'

## Usage


- replace the data JsonData file in scr/components/ with your data
- Visit 'localhost:3000' in your browser to see the app
- press start



## Contributors

Mikah Niehaus
