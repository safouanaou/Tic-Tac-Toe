the code should use IIFE and Factrory Functions to eradicate the use of global variables and functions
the DOM should be entirely separate from the game logic

GameBoard {
    Role: Data vault, its dumb and only cares about the array state
    Private State: board (array)
    API:
     -getBoard()
     - PlaceMarker(index, marker): checks if index is empty, if so, it   adds a marker
     - restBoard()


}

GameController {
    Private state: players (array holding the two player objects)
    Public Methods: 
     - playRound(index): tells the Board to mark a spot, checks for a win/tie, and switches the player.
     - checkWinner()
     - restartGame()
}

Player Factory {
    data: uses a factory function to create players with a name and a marker
}

Display Controller {
    - the DOM module responsible for displaying the game
}