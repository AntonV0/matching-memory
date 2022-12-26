# Matching Memory
## Project #54 from Codecademy's Full Stack Engineer Career Path
### By Anton Vlasenko (AntonV0)  
## Project Outline
This project is a single-player card matching game made with the React-Redux library. The player is presented with 12 cards which are revealed when clicked (up to 2 cards can be revealed at a time). When the revealed cards are identical, they do not revert back to their hidden state, and the player scores 2 points. The game is won when all 12 cards are revealed.

The application consists of 5 React components:
- App: The root component, App renders the Score and Board components
- Score: Child of the App component, Score displays the number of matched cards
- Board: Child of the App component, Board creates the card grid for gameplay
- CardRow: Child of the Board component, CardRow renders a row of Card components
- Card: Child of the CardRow component, Card displays the card content when flipped over

The application state is an array of 12 objects with each object representing a card. All objects have 4 properties:
- id
- contents
- visible
- matched

There are 3 actions that make the game function as intended:
- setGame: randomises the card array and sets visible and matched of all cards to false
- flipCard: sets visible of the specified card id to true
- resetCards sets visible to false on unmatched cards

## What I Learned
- Importing and implementing a "Provider" component from the react-redux library (to give descendant components access to the Redux store without using props)
- Implementing selectors (pure functions that are used to access sections of state in the Redux store)
- Retrieving data from the store with useSelector()
- Dispatching actions with useDispatch()
- Understanding that a nested component can access data and dispatch actions as easily as a higher-level component
***
*Please note that in most cases, in each project, the first or second commit is the starter code provided by Codecademy.*
